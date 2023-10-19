const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    buyer: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Order must have a buyer"],
        ref: 'Buyer'
    },
    seller: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Order must have a seller"],
        ref: 'Seller'
    },
    items: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }]
})

// Add a custom validator to ensure there's at least one item in the items array
orderSchema.path('items').validate(function (value) {
    return value.length > 0;
}, 'Order must have at least one item');

const Order = mongoose.model('Order', orderSchema);