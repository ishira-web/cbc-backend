import express from "express";
import { createUser, getAllUser, loginUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",createUser);
userRouter.get("/",getAllUser);
userRouter.post("/login",loginUser);


export default userRouter;