// @ts-nocheck
/**
 * App module
 * @module app
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
 * @type {function}
 */
const app = express();

  /**
  * @typedef {import} morgan
  */
const morgan = require('morgan');

 /**
  * @typedef {import} productsRoutes
  */

/**
 * @type {string | number}
 */
const port = process.env.PORT || 3001

/**
 * @type {string}
 */
const mongodb_url = `mongodb+srv://amathm:Ljloco1078@cluster0-q1t3w.mongodb.net/test?retryWrites=true&w=majority`;


/**
 * @function
 * @param {Function} @param {string} dev
 * @return {undefined}
 */
app.use(morgan('dev'));

/**
 * @function
 * @param {Function} express.urlencoded
 * @return {undefined}
 */
app.use(express.urlencoded({extended: false}));

/**
 * @function
 * @param {Function} express.json
 * @return {undefined}
 */
app.use(express.json())

/**
 * @function
 * @typedef {import} productsRoutes
 */
const productsRoutes = require('./resources/routes/products.routes');

 /**
  * @typedef {import} orderRoutes
  */
const orderRoutes = require('./resources/routes/orders.routes');

 /**
  * @typedef {import} checkoutRoute
  */
const checkoutRoute = require('./resources/routes/checkout.route');

/**
 * testing stripe payment
 */

const stripeRoute = require('./resources/stripe/stripe');

const userRoute = require('./resources/routes/user.route');

// mongodb client
/**
 * @function
 * @param {String} mongodb_url
 * @param {Object} OPTIONS
 */
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

/**
 * @function
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).json({});
    }
    next();
});

/**
 * Middleware: for products route
 * @function
 * @param {string} products - route to /products
 * @param {Function} productsRoutes - imported products routes
 * @param {Function} next - Express next middleware
 * @return {undefined}
 */
app.use('/products', productsRoutes);

app.use('/orders', orderRoutes);

app.use('/checkout', checkoutRoute);

app.use('/payment', stripeRoute);

app.use('/user', userRoute);

/**
 * An error handler for all errors
 * @function
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

/**
 * An error handler for all errors
 * @function
 * @param {Object} error
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

/*
register
    post 
products
    get products
products:{id}
*/


module.exports = app;