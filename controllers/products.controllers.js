const ctrlProducts = {};
const Product = require('../models/productos.model');

//GET
ctrlProducts.allProducts = async (req, res) => {
    const products = await Product.find({active: true});
    res.json({products});
}
//POST
ctrlProducts.newProduct = async (req, res) =>{
    const {name, description, specs, price} = req.body;

    try{
        const product = new Product({name, description, specs, price, active: true});
        await product.save();
        res.json({name});
    }catch(e){
        console.log('Error to create new product: ', e);
        res.status(500).json({
            msg: "Error to create new product! Try it again later..."
        });
    }
}

module.exports = ctrlProducts;

