// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
const cors = require('cors');

const stripe = require('stripe')('sk_test_UkKDJc8sYmQorAmBLil2m2wb00nawxZKwF');

/**
 * App mdoule
 * @module router 
 * checkoutRoute
 */
const express = require('express');
const router = express.Router();

router.post('/create/customer', (req, res, next) => {
    const param = {
        email: req.body.email,
        name: req.body.name,
        description: req.body.description,
        balance: 12000
    }

    stripe.customers.create(param, (err, result) => {
        if(err) {
            res.status(500).json({
                message: err
            })
            console.log('error');
            return false;
        }
        res.status(200).json({ result });
        console.log(result);
    });
})

module.exports = router;



// (async (req, res) => {
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1000,
//     currency: 'gbp',
//     payment_method_types: ['card'],
//     receipt_email: 'jenny.rosen@example.com',
//   });
//   console.log(paymentIntent);
// })();

// module.exports = router;


// router.get('/', async (req, res, next) => {
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 1000,
//         currency: 'gbp',
//         payment_method_types: ['card'],
//         receipt_email: 'jenny.rosen@example.com',
//       });
//       console.log(paymentIntent);
//     res.status(200).json({
//         paymentIntent,
//     });
// });

// router.get('/secret', async (req, res, next) => {
//     const intent = await stripe.paymentIntents.create({
//         amount: 1000,
//         currency: 'gbp',
//         payment_method_types: ['card'],
//         receipt_email: 'jenny.rosen@example.com',
//       });
//       res.status(200).json({
//           client_secret: intent.client_secret
//       });
// });

// router.get('/intent', async (req, res, next) => {
//     const setupIntent = await stripe.setupIntents.create({
//         usage: 'on_session', // The default usage is off_session
//       });
//       res.status(200).json({
//           setupIntent: setupIntent
//       });
// });

// router.get('/topup', async (req, res, next) => {
//     const topup = await stripe.topups.create(
//         {
//           amount: 2000,
//           currency: 'gbp',
//           description: 'Top-up for Jenny Rosen',
//           statement_descriptor: 'Top-up',
//         },
//         function(err, topup) {
//           // asynchronously called
//         }
//       );
//       res.status(200).json({
//         topup: topup
//         });
// });