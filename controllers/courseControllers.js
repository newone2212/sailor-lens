const express = require('express');
const router = express.Router();
const { Courses } = require('../models/Courses');
const { CoursesModule } = require('../models/CoursesModule');


module.exports = {

  //Add courses
  addCourses: async (req, res) => {

    const about = new Courses({
      heading: req.body.heading,
      title: req.body.title,
      description: req.body.description,
      points: req.body.points,
      image: req.body.image,
      status: req.body.status
    });
    about.save().then(() => {
      res.send({
        message: "Course Added Successfully"
      });
    }).catch((e) => {
      res.send(e);
    })
  },

  addCoursesModule: async (req, res) => {
    const about = new CoursesModule({
      ModuleName: req.body.ModuleName,
      status: req.body.status,
      description: req.body.description,
      Video: req.body.Video,
      pdf: req.body.pdf,
    });
    about.save().then(() => {
      res.send({
        message: "Course Module Added Successfully"
      });
    }).catch((e) => {
      res.send(e);
    })
  },
  getCoursesModule: async (req, res) => {
    // console.log()
    CoursesModule.find({ModuleName: req.body.ModuleName})
      .then(result => {
        // console.log(result)
        res.status(200).json({
          coursesModule: result
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      })
  },
  getAllCoursesModule: async (req, res) => {
    CoursesModule.find()
      .then(result => {
        res.status(200).json({
          coursesModule: result
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      })
  },

  //Get Courses
  getCourses: async (req, res) => {
    Courses.find()
      .then(result => {
        res.status(200).json({
          courses: result
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      })
  },

  //Update Course
  updateCourse: async (req, res) => {
    Courses.findOneAndUpdate({ heading: req.params.id }, {
      $set: {
        heading: req.body.name,
        title: req.body.title,
        description: req.body.description,
        points: req.body.points,
        image: req.body.image
      }
    })
      .then(result => {
        res.status(200).json({
          updated_status: {
            message: "Course updated successfully"
          }
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      })
  },


  //Deactivate Course
  deactivateCourse: async (req, res) => {
    Courses.findOneAndUpdate({ heading: req.params.id }, {
      $set: {
        status: "Inactive"
      }
    })
      .then(result => {
        res.status(200).json({
          updated_status: {
            message: "Course deactivated successfully"
          }
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      })
  },
}