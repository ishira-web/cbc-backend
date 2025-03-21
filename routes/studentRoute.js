import express from "express";
import {getStudents, createStudent} from "../Controllers/studentController.js"


// Create Student Router
const studentRouter = express.Router();
// Assign the Get student Functions in there
studentRouter.get("/",getStudents);
//Assign the Create student Functions in there 
studentRouter.post("/",createStudent);


export default studentRouter;