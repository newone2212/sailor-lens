const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentControllers');

// Route to initiate payment
router.post('/initiate', paymentController.initiatePayment);
router.post('/callback', paymentController.callback);

module.exports = router;
