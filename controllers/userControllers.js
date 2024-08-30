const express = require('express');
const router = express.Router();
const{Users} = require('../models/Users');


module.exports = {

    //Register User
    register : async (req, res) =>{
        Users.find({email_id: req.body.email_id}).exec().then((user) => {
            if(user.length >=1){
                return res.status(401).json({
                    message: "Email ID already exists",
                    data: undefined
                })
            }else{

                        const user = new Users({
                            name: req.body.name,
                            mobile: req.body.mobile,
                            email_id: req.body.email_id
                        });
                        user.save().then(() => {
                            res.send({
                                message : "User Registered Successfully"
                            });
                        }).catch((e) => {
                            res.send(e);
                        })
                    }
                })
            },


  //Profile of a Particular User
    Profile : async (req, res) => {
        Users.findOne({email_id:req.params.id})
        .then(result => {
          res.status(200).json({
            user:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

  //Profile of a all User
    getProfile : async (req, res) => {
        Users.find()
        .then(result => {
          res.status(200).json({
            user:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Profile
    updateProfile : async (req, res) => {
        Users.findOneAndUpdate({email_id:req.params.id},{
          $set:{
            name: req.body.name
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "user profile updated successfully"
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
    // get count
    getCount :async (req, res) => {
      try {
        // Query the database to get the count of total users
        const count = await Users.countDocuments();
        res.json({ count });
      } catch (error) {
        res.status(500).json({ error: 'Error fetching total users count' });
      }
    }
}