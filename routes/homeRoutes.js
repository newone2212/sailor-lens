// routes/homeRoutes.js
const express = require('express');
const homeControllers = require('../controllers/homeControllers');

const router = express.Router();

router.post('/add', homeControllers.addHome);
router.get('/get', homeControllers.getHome);
router.patch('/update/:id', homeControllers.updateHome);

module.exports = router;
