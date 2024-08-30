// routes/footerRoutes.js
const express = require('express');
const footerControllers = require('../controllers/footercontrollers');

const router = express.Router();

router.post('/add', footerControllers.addFooters);
router.get('/get', footerControllers.getFooters);
router.patch('/update/:id', footerControllers.updateFooter);

module.exports = router;
