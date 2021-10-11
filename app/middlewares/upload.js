const util = require("util");
const multer = require("multer");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var base_path = __basedir
        cb(null, __basedir+"/uploads");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname, 'hwa daaa???');
        if(file.originalname == 'blob'){
            cb(null, file.originalname + '-' + Date.now());
        }else{
            cb(null, file.originalname);
        }

    },
});
const maxSize = 2 * 1024 * 1024;

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
