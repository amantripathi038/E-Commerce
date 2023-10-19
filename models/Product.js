const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = mongoose.Schema({
    seller: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Product must have a seller"]
    },
    name: {
        type: String,
        required: [true, "Please provide a valid name"]
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    availableQuantity: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;