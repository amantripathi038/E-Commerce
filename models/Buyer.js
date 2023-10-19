const mongoose = require('mongoose');
const validator = require('validator');

const buyerSchema = mongoose.Schema({
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
    orders: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Order'
    }]
})

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;