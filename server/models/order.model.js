const mongoose = require('mongoose');

const Order = new mongoose.Schema(
    {
        quantity: { type: Number, required: true },
        item: { type: String, required: true },
        type: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
    { collection: 'order-data' }
)

const model = mongoose.model('OrderData', Order);

module.exports = model;