const express = require('express');
const router = express.Router();
const{Works} = require('../models/Works');


module.exports = {

    //Add Works
    addWorks : async (req, res) =>{

                        const work = new Works({
                            image: req.body.image,
                            name: req.body.name,
                            channel: req.body.channel,
                            details: req.body.details,
                            channel_link: req.body.channel_link
                        });
                        work.save().then(() => {
                            res.send({
                                message : "Work Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get Works
  getWorks : async (req, res) => {
        Works.find()
        .then(result => {
          res.status(200).json({
            works:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update work
    updateWork : async (req, res) => {
        Works.findOneAndUpdate({name:req.params.id},{
          $set:{
            image: req.body.image,
            name: req.body.name,
            channel: req.body.channel,
            details: req.body.details,
            channel_link: req.body.channel_link
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Work updated successfully"
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