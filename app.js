const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
require('dotenv').config()

const indexRouter = require('./routes/index')

const port = process.env.PORT || 3000

const app = express()
require('./auth/passportConfig')
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', require('./routes'));


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor funcionando en el puerto ${port}`)
})

module.exports = app
