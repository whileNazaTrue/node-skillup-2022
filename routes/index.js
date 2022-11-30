const express = require('express')
const { get } = require('../controllers/index')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)

//
const auth = require('./authentication')

//
router.use('/auth', auth)

module.exports = router