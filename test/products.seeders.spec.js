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

describe('seeding products data to colletion', () => {
  beforeEach((done) => {
    mongoose.connection.collections.products.drop(() => {
        done();
    });
  });
  afterEach((done) => {
    mongoose.connection.collections.products.drop(() => {
        done();
    });
  });

  it('should add a new product to products collection', (done) => {
    const products = new Product({
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
      return assert(!products.isNew);
    }).catch((err) => {
      // console.log(err);
    })
    done();
  });
});

