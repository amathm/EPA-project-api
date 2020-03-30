const app = require('../app');
const assert = require('assert');
const Product = require('../resources/models/products.model');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../resources/models/user.model');

mongoose.Promise = global.Promise;

const mongodb_url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-q1t3w.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected')
}).on('error', (err) => {
  console.log('error', err);
});

describe('seeding products data to colletion', () => {
    const req = {
        body: {
        }
    };
    req.body.email = 'tester@gmail.com';
    req.body.password = 'correctpassword';
    req.body.name = 'tester';
    req.body.balance = 0;
    req.body.address = 123;
    req.body.currency = 'gbp';
    req.body.description = 'test';

    it('should check password is hashed', (done) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(hash) {
                // bcrypt.compare(req.body.password, hash)
                User.find({ email: req.body.email }).exec()
                    .then(user => {
                        const newUser = new User({
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
                        newUser.save()
                            .then(createdUser => {
                                assert(createdUser.email === req.body.email);
                            });
                            done();
                    });
            }
        });
    });
  
  it('should find user in database', (done) => {
      User.findOne({ email: req.body.email}).exec()
        .then((result) => {
            // console.log(result);
            assert(result.email === 'amath78@gmail.com');
        });
        done();
  });
});

