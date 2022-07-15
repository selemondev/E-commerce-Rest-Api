const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [ true, "Please add a product title"]
    },

    image: {
        type: String,
        required: [ true, "Please add a product image"],
    },

    description: {
        type: String,
        required: [ true, "Please add a product description"],
    },

    price: {
        type: Number,
        required: [ true, "Please add a product price"],
    },

    categories: {
        type: Array,
    },

    inStock: {
        type: Boolean,
        default: true,
    }
});
module.exports = mongoose.model("Products", productSchema)