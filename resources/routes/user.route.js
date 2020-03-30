
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const multer = require('multer');
const upload = multer();

const User = require('../models/user.model');

const Card = require('../models/card.model');

const stripe = require('stripe')('sk_test_UkKDJc8sYmQorAmBLil2m2wb00nawxZKwF');

router.post('/signup', upload.none(), (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (user) {
                return res.status(409).json({
                    message: 'User Exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            error: err
                        });
                    } 
                    if(hash) {
                        // const registerCard = new Card({
                        //     _id: new mongoose.Types.ObjectId(),
                        //     name: req.body.name,
                        //     balance: req.body.balance,
                        //     address: req.body.address,
                        //     description: req.body.description,
                        //     currency: req.body.currency
                        // });
                        // registerCard.save();
                        const createStripeCustomer = () => {
                            let params = {
                                email: req.body.email,
                                name: req.body.name,
                                description: req.body.description,
                                balance: req.body.balance
                            }
                            return stripe.customers.create(params, (err, customer) => {
                                if(err) {
                                    console.log(err);
                                    res.status(500).json({
                                        error: 'unable to create a stripe customer'
                                    })
                                }
                                if(customer) {
                                    const user = new User({
                                        _id: new mongoose.Types.ObjectId(),
                                        email: req.body.email,
                                        name: req.body.name,
                                        password: hash,
                                        card: {
                                            balance: req.body.balance,
                                            address: req.body.address,
                                            description: req.body.description,
                                            currency: req.body.currency
                                        }
                                    });
                                    user.save()
                                        .then(userCreated => {
                                            res.status(201).json({
                                                message: 'User created',
                                                user: userCreated,
                                                stripeCustomer: customer
                                            });
                                        })
                                        .catch(err => {
                                            res.status(500).json({
                                                message: err
                                            });
                                        });
                                    console.log(customer);
                                } else {
                                    console.log('error');
                                }
                            })
                        }
                        createStripeCustomer();
                    } else {
                        return res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                });
            }
        });
});

router.post('/login', upload.none(), (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if(!(user)) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if(result) {
                    const retrieveCustomer = () => {
                        stripe.customers.retrieve(req.body.stripeCustomer, (err, customer) => {
                            if(err) {
                                console.log(err);
                                res.status(500).json({
                                    error: 'unable to create a stripe customer'
                                })
                            }
                            if(customer) {
                                const token = jwt.sign({
                                    email: user[0].email,
                                    userId: user[0]._id
                                },
                                process.env.JWT_KEY,
                                {
                                    expiresIn: '1h'
                                });
                                return res.status(200).json({
                                    message: 'Auth successful',
                                    token: token,
                                    user: user[0],
                                    stripeCustomer: customer
                                });
                            }
                        });
                    }
                    retrieveCustomer();
                } else {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
})

router.delete('/:userId', (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then(deleteUser => {
            res.status(200).json({
                message: 'User Deleted',
                deletedUser: deleteUser
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
});

router.get('/', (req, res, next) => {
    User.find()
        .exec()
        .then(users => {
            res.status(200).json({
                users: users
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
});

router.post('/pay', (req, res, next) => {
    // const params = {
    //     line_items: [{
    //         //
    //     }]
    // }
    stripe.checkout.sessions.create(
        {
          success_url: 'https://example.com/success',
          cancel_url: 'https://example.com/cancel',
          payment_method_types: ['card'],
          line_items: [
            {
              name: 'T-shirt',
              description: 'Comfortable cotton t-shirt',
              amount: 1500,
              currency: 'gbp',
              quantity: 2,
            },
          ],
        },
        function(err, session) {
            console.log(session);
            return res.status(200).json({
                session: session
            });
        }
      );
})

module.exports = router;