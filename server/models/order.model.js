const mongoose = require('mongoose');

const Order = new mongoose.Schema(
    {
        item: { type: String, required: true },
        type: { type: String, required: true },
        quantity: { type: Number, required: true },
        size: { type: String, required: false }
    },
    { collection: 'order-data' }
)

const model = mongoose.model('OrderData', Order);

module.exports = model;