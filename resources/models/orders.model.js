/**
 * User Model module
 * @module User model 
 * User Model, schema
 */
const mongoose = require('mongoose');

/**
 * @constant orderSchema
 * @returns {Function} Schema
 */
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema)