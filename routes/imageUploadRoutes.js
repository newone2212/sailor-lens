const express = require('express');
const router = express.Router();

const image = require('../controllers/imageControllers');
const upload = require('../middleware/uploader')


//route to upload image
router.post('/upload',upload.fields([
    { name: 'file', maxCount: 1 }]),image.imageUpload);

module.exports = router