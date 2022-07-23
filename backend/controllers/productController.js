const Products = require("../models/productModal");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler( async ( req, res ) => {
    const { title, image, description, price, categories } = req.body;

    if( !title || !image || !description || !price || !categories ) {
        res.status(400);
        throw new Error("Please add all the required fields");
    };
    const createdProducts = await Products.create({
        title,
        image,
        description,
        price,
        categories
    });
    res.status(201).json(createdProducts)
});


const updateProduct = asyncHandler( async ( req, res ) => {
    const product = await Products.findById(req.params.id);

    if(!product) {
        res.status(404);
        throw new Error("Product not found")
    } else {
        const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(200).json(updatedProduct)
    }
});


const deleteProduct = asyncHandler( async( req, res) => {
    const product = await Products.findById(req.params.id);

    if( !product ) {
        res.status(404);
        throw new Error(" Product not found ");
    } else {
        await product.remove();
        res.status(200).json({ id: req.params.id})
    }
});

const getAllProducts = asyncHandler( async ( req, res ) => {
    try {
        let products;
        products = await Products.find();
        res.status(200).json(products)

    } catch(error) {
        res.status(400);
        throw new Error(error.message)
    }
});

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
}
