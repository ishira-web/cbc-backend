import express from "express";
import Product from "../Model/product.js";


const productRoute = express.Router();

//Create Product Get Router

productRoute.get("/",(req,res)=>{
    product.find().then(()=>{
        (productList)=>[
            res.json({
                message : productList
            })
        ]
    })
});

productRoute.post("/",(req,res)=>{
    const product = new Product(req.body)
    product.save().then(()=>{
        res.json({
            message : "Product Create Sucsessfully !"
        })
    }).catch((err)=>{
        res.json({
            message : "Product Create Failed !"
        })
    })
})



export default productRoute;