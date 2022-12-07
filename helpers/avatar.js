const multer = require('multer');

// multer configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;

        cb(null, pathStorage);
    },
    filename: function(req, file, cb){
        //file extension
        const ext = file.originalname.split('.').pop();
        const filename = `file-${Date.now()}.${ext}`;
        
        req.body.file = file
        cb(null, filename);
    }
}); 

const uploadAvatar = multer({storage});


module.exports = uploadAvatar;