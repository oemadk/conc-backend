const uploadFile = require("../middlewares/upload");
const fs = require('fs');

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);
        console.log(req.file);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        res.status(200).send({

            message: req.file.filename,
        });
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

const getListFiles = (req, res) => {
    var base_path = __basedir

    fs.readdir(__basedir
        + '/uploads', function (err, files) {
        if (err) {
            res.status(500).send({
                message: err,
            });
        }

        let fileInfos = [];
        if(files){
            files.forEach((file) => {
                fileInfos.push({
                    name: file,
                    url: __basedir+ '/uploads/'+  file,
                });
            });
            res.status(200).send(fileInfos);

        }


    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    var base_path = __basedir;
    res.download(__basedir +'/uploads/' + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

module.exports = {
    upload,
    getListFiles,
    download,
};
//
// const upload = async (req, res) => {
//     try {
//         await uploadFile(req, res);
//     } catch (err) {
//         if (err.code == "LIMIT_FILE_SIZE") {
//             return res.status(500).send({
//                 message: "File size cannot be larger than 2MB!",
//             });
//         }
//
//         res.status(500).send({
//             message: `Could not upload the file: ${req.file.originalname}. ${err}`,
//         });
//     }
// };
