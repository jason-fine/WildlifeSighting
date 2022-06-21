const express = require('express')
const router = express.Router()
const entryCtrl = require('../controller/entryCtrl.js')
const fs = require('fs')
const path = require('path')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage});

// const imgModel = require('../models/Image')

// router.get('/', (req, res) => {
//     imgModel.find({}, (err, items) => {    
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('imagesPage', {items: items});
//         }
//     });
// });

// router.post('/', upload.single('image'), (req, res, next) => {
//     let obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     })
// })

router.get('/update', entryCtrl.sendUpdateUploadForm)
// router.post('/update', upload.single('image'), (req, res, next) => {
//     let obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgModel.updateOne(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     })
// })
router.put('/update', entryCtrl.updateUpload)
router.get('/delete', entryCtrl.deleteEntry)
//router.delete('/:id', entryCtrl.deleteEntry)

module.exports = router