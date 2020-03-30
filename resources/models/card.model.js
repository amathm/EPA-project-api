/**
 * User Model module
 * @module Card model 
 * User Model, schema
 */
const mongoose = require('mongoose');

/**
 * @constant cardSchema
 * @returns {Function} Schema
 */
const cardSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: 'gbp'
    }
});

 module.exports = mongoose.model('Card', cardSchema)