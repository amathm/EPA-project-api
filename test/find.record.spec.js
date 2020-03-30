const app = require('../app');
const assert = require('assert');
const Product = require('../resources/models/products.model');
const mongoose = require('mongoose');

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

describe('finds product in database collection', () => {
    var products;
    beforeEach((done) => {
        mongoose.connection.collections.products.drop(() => {
        });
        products = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: 'Product test',
            price: 111,
            ingredients: [
              "item 1",
              "item 2"
            ],
            description: 'a description',
            imagePath: 'https://localhost/image.jpg',
            type: {
              food: true
            },
          });
        products.save().then(() => {
            done();
        }).catch((err) => {
        //   console.log(err);
        });
    });

    afterEach((done) => {
        mongoose.connection.collections.products.drop(() => {
            done();
        });
    });

  it('should find a product in products collection', (done) => {
    Product.findOne({ _id: products._id }).then((result) => {
        assert(result._id.toString() === products._id.toString());
        done();
    });
  });
});
