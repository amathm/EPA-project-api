/**
 * App mdoule
 * @module router 
 * productRoute
 */

 /**
  * @typedef {import} express
  */
const express = require('express');

const mongoose = require('mongoose');

const checkAuth = require('../middleware/checkAuth');

const Product = require('../models/products.model');

/**
 * @constant router
  * @function express.Router()
  * router function invoked
  * @returns {undefined}
  */
const router = express.Router();

/**
 * Handles all products request
 * @function router.get() get route
 * @param {String} '/'
 * @param {Function} callback 
 */
router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(product => {
            if(product.length >= 1) {
                res.status(200).json(product);
            } else {
                res.status(404).json({
                    message: 'No Entries'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

/**
 * @function router.get() get product ID
 * @param {String} '/:poductId' - param product id
 * @param {Function} callback 
 */
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if(doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'No valid entry'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({
                error: err
            });
        });
});

/**
 * @function router.post()
 * @param {String} '/:poductId' - param product id
 * @param {Function} checkAuth
 * @param {Function} callback 
 */
router.post('/', checkAuth, (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price,
        imagePath: req.body.imagePath,
        ingredients: req.body.ingredients,
        description: req.body.description
    })
    product
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Handling all products post request',
                createdProduct: product
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

/**
 * @function router.delete()
 * @param {String} '/:poductId' - param product id
 * @param {Function} checkAuth
 * @param {Function} callback 
 */
router.delete('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId;
    Product.remove({_id: id})
        .exec()
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * @function router.patch()
 * @param {String} '/:poductId' - param product id
 * @param {Function} checkAuth
 * @param {Function} callback 
 */
router.patch('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {}
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id: id}, { $set: updateOps })
        .exec()
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        });
});

module.exports = router;