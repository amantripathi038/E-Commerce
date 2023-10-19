const mongoose = require('mongoose');
const validator = require('validator');

const sellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a valid name"]
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: true,
        lowercase: true,
        index: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, "Please provide a valid password"],
        minlength: 8,
        select: false
    },
    catalog: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }]
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;