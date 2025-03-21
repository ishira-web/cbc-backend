import express from "express";
import {getStudents, createStudent} from "../Controllers/studentController.js"


// Create Student Router
const studentRouter = express.Router();

studentRouter.get("/",(req,res)=>{

})

studentRouter.post("/",(req,res)=>{
    
})


export default studentRouter;