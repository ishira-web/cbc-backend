import express from "express";
import { createProduct, getProducts } from "../Controllers/productController.js";


const productRoute = express.Router();

//Create Product Get Router

productRoute.get("/",getProducts);

productRoute.post("/",createProduct);



export default productRoute;