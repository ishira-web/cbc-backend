import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    pd_name : String,
    pd_description : String,
    pd_price : Number
})

const product = mongoose.model("Product",productSchema);

export default product;