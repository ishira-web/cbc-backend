import express from "express";
import { createProduct, deleteProduct, getProductbyName, getProducts } from "../Controllers/productController.js";


const productRoute = express.Router();

//Create Product Get Router

productRoute.get("/",getProducts);

productRoute.post("/",createProduct);

productRoute.delete("/",deleteProduct);

productRoute.get("/getProductsbyName",getProductbyName);


export default productRoute;