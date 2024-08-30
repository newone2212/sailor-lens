// routes/courseRoutes.js
const express = require('express');
const courseControllers = require('../controllers/courseControllers');

const router = express.Router();

router.post('/addModule',courseControllers.addCoursesModule);
router.post('/add', courseControllers.addCourses);
router.get('/get', courseControllers.getCourses);
router.patch('/update/:id', courseControllers.updateCourse);
router.patch('/deactivate/:id', courseControllers.deactivateCourse);
router.post('/getModule',courseControllers.getCoursesModule)
router.get('/AllModule',courseControllers.getAllCoursesModule);

module.exports = router;
