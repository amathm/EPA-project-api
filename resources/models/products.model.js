/**
 * Product Model module
 * @module products model 
 * Product Model, schema
 */
const mongoose = require('mongoose');

/**
 * @constant productSchema
 * @returns {Function} Schema
 */
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: [String],
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    type: {
        food: {
            type: Boolean,
            default: true
        },
        beverage: {
            type: Boolean,
            default: false
        }
    }
});

module.exports = mongoose.model('Product', productSchema)