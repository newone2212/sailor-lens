const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const{Admin} = require('../models/Admins');
const{adminToken} = require('../models/AdminToken');


module.exports = {

    //Register Admin
    register : async (req, res) =>{
        Admin.find({email_id: req.body.email_id}).exec().then((admin) => {
            if(admin.length >=1){
                return res.status(401).json({
                    message: "Email ID already exists",
                    data: undefined
                })
            }else{
                bcrypt.hash(req.body.password, 2, (err, hash) => {
                    if(err){
                        return res.status(500).json({
                            message: "Error, cannot encrypt password",
                            data: undefined
                        })
            }else{
                const admin = new Admin({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    mobile: req.body.mobile,
                    email_id: req.body.email_id,
                    password : hash
                });
                admin.save().then(() => {
                    res.send({
                        message : "Admin Registered Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            }
        })
    }
})
},

    //Admin Login
    login : async (req, res, next) => {
        Admin.findOne({email_id: req.body.email_id}).exec()
        .then((admin) => {
            if(!admin){
                return res.status(401).json({
                    message: "Admin not found",
                    data: undefined
                })
            }
            bcrypt.compare(req.body.password, admin.password, async (err, result) => {
                if(err){
                    return res.status(401).json({
                        message: "Server error, authentication failed",
                        data: undefined
                    })
                }
                if(result){
                    const token = jwt.sign(
                        {
                            email_id: admin.email_id,
                            adminId: admin._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "24h"
                        }
                    );
                    
                    await adminToken.findOneAndUpdate({_adminId: admin._id, tokenType: "login"}, {token: token}, {new: true, upsert: true})
                    return res.status(200).json({
                        message: "Login successfully!",
                        data: {
                            token,
                            admin
                        }
                    })
                        
                }
                return res.status(401).json({
                    message: "Wrong password, login failed",
                    data: undefined
                })
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server error, authentication failed",
                data: undefined
            })
        })
    },

    // Admin Logout
    logout : async (req, res) => {
            // Delete the session token or access token associated with the admin
            const admin = await Admin.findById(req.adminId);
            // console.log(admin._id)
            const logout = await adminToken.findOneAndUpdate({_adminId : admin._id},
            // console.log(logout.token)
            {
                $set: {
                    token : null
            }}
            ).then(result=>{
                res.status(200).json({
                  message:{
                      message : "Admin Logged Out Successfully"
                  }
                })
              })
              .catch(err=>{
                console.log(err);
                res.status(500).json({
                  error:err,
                  message : "Internal Serval error"
                })
              })
    },

    //Profile of a Particular Admin
    Profile : async (req, res) => {
        Admin.findOne({email_id:req.params.id})
        .then(result => {
          res.status(200).json({
            admin:result
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
        Admin.findOneAndUpdate({email_id:req.params.id},{
          $set:{
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            mobile: req.body.mobile,
            image:req.body.image
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Admin profile updated successfully"
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

     //Change Password
     ChangePassword : async (req,res) => {
        const email_id = req.params.id;
        const {  password, newPassword } = req.body;

        // find the user by email
        const admin = await Admin.findOne({ email_id });
        if (!admin) return res.status(400).send('Invalid email or password.');
      
        // verify the current password
        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');
      
        // generate a new hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
      
        // update the user's password
        admin.password = hashedPassword;
        await admin.save();
      
        // generate a new JWT token
        const token = jwt.sign({ _id: admin._id }, 
            process.env.JWT_KEY
            );
      
        // send the response
        res.send(token);
      },


}