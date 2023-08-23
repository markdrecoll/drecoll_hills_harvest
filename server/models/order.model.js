const mongoose = require('mongoose');

const Order = new mongoose.Schema(
    {
        item: { type: String, required: true },
        type: { type: String, required: true },
        size: { type: String, required: false },
        quantity: { type: Number, required: true }
    },
    { collection: 'order-data' }
)

const model = mongoose.model('OrderData', Order);

module.exports = model;