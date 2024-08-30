// routes/reviewRoutes.js
const express = require('express');
const reviewControllers = require('../controllers/reviewControllers');

const router = express.Router();

router.post('/add', reviewControllers.addReview);
router.get('/get', reviewControllers.getReviews);
router.patch('/update/:id', reviewControllers.updateReview);

module.exports = router;
