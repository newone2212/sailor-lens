// routes/userRoutes.js
const express = require('express');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

router.post('/register', userControllers.register);
router.get('/profile', userControllers.getProfile);
router.get('/profile/:id', userControllers.Profile);
router.patch('/update-profile/:id', userControllers.updateProfile);
router.get('/count', userControllers.getCount);

module.exports = router;
