import mongoose from "mongoose";
import user from "../Model/user.js";

export function createUser(req,res){
     
    const newUser = new user(req,res);

    newUser.save().then(()=>{
        res.json({
            message : "User Create Successfully"
        })
    }).catch(err=>{
        res.statues(500).json({
            error: err.message
        });
    })
}

export function getAllUser(req,res){
    user.findAll().then(
        (userList)=>{
            res.json({
                list : userList 
            })
        }
    )
}