// routes/focusRoutes.js
const express = require('express');
const focusControllers = require('../controllers/focusControllers');

const router = express.Router();

router.post('/add', focusControllers.addFocus);
router.get('/get', focusControllers.getFocus);
router.patch('/update/:id', focusControllers.updateFocus);

module.exports = router;
