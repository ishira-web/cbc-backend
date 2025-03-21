export function getProducts(req,res){
    product.find().then(()=>{
        (productList)=>[
            res.json({
                message : productList
            })
        ]
    })
}


export function createProduct(req,res){
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
}