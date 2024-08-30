const express = require('express');
const router = express.Router();
const{Abouts} = require('../models/Abouts');


module.exports = {

    //Add abouts
    addAbouts : async (req, res) =>{

                        const about = new Abouts({
                            name: req.body.name,
                            title: req.body.title,
                            description: req.body.description,
                            facebook_link: req.body.facebook_link,
                            instagram_link: req.body.instagram_link,
                            twitter_link: req.body.twitter_link,
                            youtube_link: req.body.youtube_link,
                        });
                        about.save().then(() => {
                            res.send({
                                message : "About Us Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get About Us
    getAboutUs : async (req, res) => {
        Abouts.find()
        .then(result => {
          res.status(200).json({
            about_us:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update about us
    updateAboutUs : async (req, res) => {
        Abouts.findOneAndUpdate({name:req.params.id},{
          $set:{
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            facebook_link: req.body.facebook_link,
            instagram_link: req.body.instagram_link,
            twitter_link: req.body.twitter_link,
            youtube_link: req.body.youtube_link,
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "about us updated successfully"
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