/**
 * User Model module
 * @module User model 
 * User Model, schema
 */
const mongoose = require('mongoose');
const Card = require('./card.model');

/**
 * @constant userSchema
 * @returns {Function} Schema
 */
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        required: true
    },
    card: {
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
    }
});

module.exports = mongoose.model('User', userSchema)