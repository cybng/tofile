const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/login",(req,res) =>{
    console.log(req.body);
    const {username,password} = req.body; 
    User.findOne({username:username})
         .exec(async(err,data)=>{

            if(err){
                return res.status(201).json({msg:"Something went wrong"});
            }
            if(data){
                
                if(data.password===password){
                    const token = jwt.sign({_id:data._id},process.env.port,{expiresIn:"1d"})
                    res.cookie("token",token,{expiresIn:"1d"})
                    const {_id,username} = data;
                    const userDetail = {token,user:{_id,username}};
                    return res.status(200).json(userDetail);
                }
            }else{
               return res.status(201).json({msg:"Password Not Match",status:201});
            }
         })
})
router.post("/getProfileDetails",(req,res) =>{ 
    const {userId} = req.body; 
    User.findOne({_id:userId},(err,data)=>{
        if(err){
            return res.status(201).json({msg:"Something went wrong"});
        }
        if(data){
            return res.status(200).json(data);
        }
    })
         
})

router.post("/updateProfileDetails",(req,res) =>{ 
  const{name, fname,lname,address,city,country,postalcode,about} = req.body; 
    const {userId} = req.body; 
    User.updateMany({_id:userId}, { $set: { name,fname,lname,address,city,ountry,ostalcode,about} },(err,data)=>{
        if(err){
            return res.status(201).json({msg:"Something went wrong"});
        }
        if(data){
            return res.status(200).json(data);
        }
    })
         
})
router.post("/reg",(req,res) =>{ 
  const{fname,lname,email,password} = req.body; 
    const {userId} = req.body; 
   const userData = User({
    fname,lname,email,password
   });

   userData.save((err,data)=>{
    if(err){
        return res.status(201).json({msg:"Something went wrong"});
    }
    if(data){
        return res.status(200).json(data);
    }
   })
         
})

module.exports = router;