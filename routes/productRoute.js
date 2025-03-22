import express from "express";
import { createProduct, deleteProduct, getProductbyName, getProducts } from "../Controllers/productController.js";


const productRoute = express.Router();

productRoute.get("/",getProducts);

productRoute.post("/",createProduct);

productRoute.delete("/",deleteProduct);

productRoute.get("/:pd_name",getProductbyName);


export default productRoute;
