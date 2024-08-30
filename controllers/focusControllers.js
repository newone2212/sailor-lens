const express = require('express');
const router = express.Router();
const{Focus} = require('../models/Focus');


module.exports = {

    //Add Focus
    addFocus : async (req, res) =>{

                        const focus = new Focus({
                            title: req.body.title,
                            description: req.body.description,
                            icon: req.body.icon
                        });
                        focus.save().then(() => {
                            res.send({
                                message : "Focus Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get Focus
    getFocus : async (req, res) => {
        Focus.find()
        .then(result => {
          res.status(200).json({
            Focus:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Focus
    updateFocus : async (req, res) => {
        Focus.findOneAndUpdate({title:req.params.id},{
          $set:{
            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "focus updated successfully"
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