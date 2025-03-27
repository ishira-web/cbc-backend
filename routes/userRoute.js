import express from "express";
import { createUser, getAllUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",createUser)
userRouter.get("/",getAllUser);

export default userRouter;