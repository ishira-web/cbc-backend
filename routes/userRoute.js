import express from express;
import { createUser, getAllUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.createUser("/",createUser);
userRouter.getAllUser("/",getAllUser);