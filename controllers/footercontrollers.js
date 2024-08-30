const express = require('express');
const router = express.Router();
const{Footers} = require('../models/Footers');


module.exports = {

    //Add Footer
    addFooters : async (req, res) =>{

                        const footers = new Footers({
                            logo: req.body.logo,
                            title: req.body.title,
                            description: req.body.description,
                        });
                        footers.save().then(() => {
                            res.send({
                                message : "Footer Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get Footers
    getFooters : async (req, res) => {
        Footers.find()
        .then(result => {
          res.status(200).json({
            footer:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update footer
    updateFooter : async (req, res) => {
        Footers.findOneAndUpdate({title:req.params.id},{
          $set:{
            logo: req.body.logo,
            title: req.body.title,
            description: req.body.description,
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "footer updated successfully"
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