/**
 * orders module
 * @module order router
 */

 /**
  * @typedef {import} express
  */
 const express = require('express');

 /**
  * @typedef {import} mongoose
  */
 const mongoose = require('mongoose');

 /**
  * @function
  * router function invoked
  * @returns {undefined}
  */
const router = express.Router();
 
/**
  * @typedef {import} Orders model
  */
 const Order = require('../models/orders.model');

 router.get('/', (req, res, next) => {
     res.status(200).json({
         message: 'Orders get route'
     });
 });

 router.post('/:orderId', (req, res, next) => {
     const order = new Order({
         _id: mongoose.Types.ObjectId(),
         quantity: req.body.quantity,
         product: req.body.productId
     });
     order.save()
        .exec()
        .then(order => {
            console.log(order);
            res.status(201).json(order)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: err
            });
        });
 });

 module.exports = router;