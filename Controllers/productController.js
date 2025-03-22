import product from "../Model/product.js"


// Get All Products
export function getProducts(req,res){
    product.find().then(
        (productList)=>[
            res.json({
                message : productList
            })
        ]
    )
}

// Create Product 
export function createProduct(req,res){
    const newProduct = new product(req.body)
    newProduct.save().then(()=>{
        res.json({
            message : "Product Create Sucsessfully !"
        })
    }).catch((err)=>{
        res.json({
            message : "Product Create Failed !"
        })
    })
}

// Delete Product

export function deleteProduct(req,res){
    product.deleteOne({pd_name: req.body.pd_name}).then(
        ()=>{
            res.json({
                message : "Product Delete Successfully"
            })
        }
    )
}

//Get Product by name

export function getProductbyName(req,res){
    
    const pd_name = req.params.pd_name;

    product.find({pd_name:req.body.pd_name}).then(
     (productList =>{
        if(productList.length == 0){
            res.json({
                message : "Product is Not Found !"
            })
        }else{
            res.json({
                list : productList
          })
        }
    }
))
}