const express = require('express');
const router = express.Router();
const{Reviews} = require('../models/Reviews');


module.exports = {

    //Add Review
    addReview : async (req, res) =>{

                        const review = new Reviews({
                            name: req.body.name,
                            review: req.body.review,
                            rate: req.body.rate
                        });
                        review.save().then(() => {
                            res.send({
                                message : "Review Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get Reviews
    getReviews : async (req, res) => {
        Reviews.find()
        .then(result => {
          res.status(200).json({
            reviews:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update reviews
    updateReview : async (req, res) => {
        Reviews.findOneAndUpdate({name:req.params.id},{
          $set:{
            name: req.body.name,
            review: req.body.review,
            rate: req.body.rate
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Review updated successfully"
            }
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },
}