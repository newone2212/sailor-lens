// routes/courseRoutes.js
const express = require('express');
const faqControllers = require('../controllers/faqControllers');

const router = express.Router();

router.post('/add', faqControllers.addFaq);
router.get('/get', faqControllers.getFaq);
router.patch('/update/:id', faqControllers.updateFaq);
router.patch('/deactivate/:id', faqControllers.inactiveFaq);

module.exports = router;
