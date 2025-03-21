import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import studentRoute from "./routes/studentRoute.js"
import productRoute from "./routes/productRoute.js";

const app = express();
//server port
const port = 6000;
const mongoUrl = "mongodb+srv://admin:admin@cluster0.f9ssd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl,{});
// Check the database connection & if it connect database connetion show the terminal
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Database Connection Successfully !")
})

app.use(bodyParser.json());
app.use("/api/students",studentRoute);
app.use("/api/products",productRoute)

// Server Port Implementation
app.listen(port,()=>{
    console.log(`Server Running in Port  ${port}`)
})



