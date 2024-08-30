const express = require('express');
const router = express.Router();
const{Home} = require('../models/Home');


module.exports = {

    //Add Home
    addHome : async (req, res) =>{

                        const home = new Home({
                            image: req.body.image,
                            title: req.body.title,
                            description: req.body.description
                        });
                        home.save().then(() => {
                            res.send({
                                message : "Home Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get Home
    getHome : async (req, res) => {
        Home.find()
        .then(result => {
          res.status(200).json({
            home:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Home
    updateHome : async (req, res) => {
        Home.findOneAndUpdate({title:req.params.id},{
          $set:{
            image: req.body.image,
            title: req.body.title,
            description: req.body.description
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Home updated successfully"
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