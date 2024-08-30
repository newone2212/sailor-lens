// routes/aboutRoutes.js
const express = require('express');
const aboutControllers = require('../controllers/aboutControllers');

const router = express.Router();

router.post('/add', aboutControllers.addAbouts);
router.get('/get', aboutControllers.getAboutUs);
router.patch('/update/:id', aboutControllers.updateAboutUs);

module.exports = router;
