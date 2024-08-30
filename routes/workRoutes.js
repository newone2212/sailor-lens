// routes/CourseRoutes.js
const express = require('express');
const workControllers = require('../controllers/workControllers');

const router = express.Router();

router.post('/add', workControllers.addWorks);
router.get('/get', workControllers.getWorks);
router.patch('/update/:id', workControllers.updateWork);

module.exports = router;
