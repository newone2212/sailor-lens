const express = require('express');
const router = express.Router();
const{Faq} = require('../models/Faq');


module.exports = {

    //Add Faq
    addFaq : async (req, res) =>{

                        const faq = new Faq({
                            question: req.body.question,
                            answer: req.body.answer,
                            status: req.body.status
                        });
                        faq.save().then(() => {
                            res.send({
                                message : "Faq Added Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    },


  //Get Faq
    getFaq : async (req, res) => {
        Faq.find()
        .then(result => {
          res.status(200).json({
            faq:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Faq
    updateFaq : async (req, res) => {
        Faq.findOneAndUpdate({question:req.params.id},{
          $set:{
            question: req.body.question,
            answer: req.body.answer
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "faq updated successfully"
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

    //inactive Faq
    inactiveFaq : async (req, res) => {
        Faq.findOneAndUpdate({question:req.params.id},{
          $set:{
            status:"inactive"
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "faq updated successfully"
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