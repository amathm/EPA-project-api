const Product = require('../models/products.model');

 /**
  * @typedef {import} mongoose
  */
const mongoose = require('mongoose');

/**
 * @type {string}
 */
const mongodb_url = `mongodb+srv://amathm:Ljloco1078@cluster0-q1t3w.mongodb.net/test?retryWrites=true&w=majority`;

/**
 * @function
 * @param {String} mongodb_url
 * @param {Object} OPTIONS
 */
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

 /**
  * @constant
  * creates new products
  * in database
  */
const products = [
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Healthy Granola',
        price: 799,
        ingredients: [
            "Oats",
            "Nuts",
            "Seeds",
            "Unrefined Oil",
            "Natural Sweetener",
            "Salt",
            "Spice",
            "Dried Fruit"
        ],
        description: 'A Healthy and delightful bowl of granola',
        imagePath: 'https://images.unsplash.com/photo-1528565935550-e006b557d4b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Chicken Soup',
        price: 988,
        ingredients: [
            "Chicken",
            "chilli",
            "Pepper",
            "Garlic",
            "Tomato"
        ],
        description: 'A soul warming chicken soup',
        imagePath: 'https://images.unsplash.com/photo-1564675454013-6e68e6a8c0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Vegan Cashew & Sweet Potato Curry',
        price: 699,
        ingredients: [
            "Cashew",
            "Potato",
            "Pepper",
            "Peppercorns",
            "Onion",
            "Spinach",
            "Coconut Milk",
            "Chilli Flakes",
            "Mustard Seeds",
            "Turmeric"
        ],
        description: 'A soul warming chicken soup',
        imagePath: 'https://images.unsplash.com/photo-1564675454013-6e68e6a8c0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Bacon & Meatball soup',
        price: 788,
        ingredients: [
            "Bacon",
            "Meatball",
            "Pepper",
            "Peppercorns",
            "Onion",
            "Spinach",
            "Lettuce",
            "Ginger",
            "Squash"
        ],
        description: 'Amsterdam style Bacon & meatball soup',
        imagePath: 'https://images.unsplash.com/photo-1576577445504-6af96477db52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Thai Prawn Tomato Soup',
        price: 645,
        ingredients: [
            "Prawn",
            "Tomato",
            "Pepper",
            "Peppercorns",
            "Onion",
            "Spinach",
            "Lettuce"
        ],
        description: 'Amsterdam style Bacon & meatball soup',
        imagePath: 'https://images.unsplash.com/photo-1584181365317-88d2a10b4414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Avocado Breakfast Bowl',
        price: 399,
        ingredients: [
            "Avocado",
            "Lemon",
            "Pepper",
            "Yogurt",
            "Sesame Seeds",
        ],
        description: 'A delightful avocado breakfast bowl',
        imagePath: 'https://images.unsplash.com/photo-1536974471655-0466120eff7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Spaghetti Soup',
        price: 500,
        ingredients: [
            "Carrots",
            "Lemon",
            "Onion",
            "Black Pepper",
            "Spaghetti",
        ],
        description: 'Light Spaghetti Soup',
        imagePath: 'https://images.unsplash.com/photo-1580654380924-13a11c7d2160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Carne Asada',
        price: 899,
        ingredients: [
            "Steak",
            "Pitta bread",
            "Onion",
            "Soy Sauce",
            "Lime",
            "Orange",
            "garlic"
        ],
        description: 'A Pitta bread Carne Asada',
        imagePath: 'https://images.unsplash.com/photo-1514843319620-4f042827c481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Salad Bowl',
        price: 286,
        ingredients: [
            "Lettuce",
            "Flower",
            "Onion",
            "Coriander",
            "Brussels Sprout"
        ],
        description: 'A Delightful Salad Bowl',
        imagePath: 'https://images.unsplash.com/photo-1584202146240-45d45b7956a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Salad Bowl Beta',
        price: 699,
        ingredients: [
            "Lettuce",
            "Carrots",
            "Tomato",
            "Coriander",
            "Brussels Sprout"
        ],
        description: 'A simple and health Salad Bowl Beta',
        imagePath: 'https://images.unsplash.com/photo-1468777675496-5782faaea55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Chili Chicken Soup',
        price: 934,
        ingredients: [
            "Chicken",
            "Pepper",
            "Onions",
            "Coriander",
            "Tomato"
        ],
        description: 'Spicy and chili chicken soup',
        imagePath: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'A Coriander Light Vegan Soup',
        price: 733,
        ingredients: [
            "Pepper",
            "Onions",
            "Coriander",
            "Tomato"
        ],
        description: 'Light and delightful Coriander soup',
        imagePath: 'https://images.unsplash.com/photo-1554284762-f67e19fa9c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Light salad bowl',
        price: 973,
        ingredients: [
            "Lettuce",
            "Onions",
            "Coriander",
            "Sessame seeds"
        ],
        description: 'Light and delightful Light salad bowl',
        imagePath: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Hue Beef Noodle Soup',
        price: 734,
        ingredients: [
            "Nodle",
            "Beef Ribs",
            "Beef Briskets",
            "Red Cabbage",
            "Thai Basil",
            "Chicken Broth",
            "Water",
            "Salt"
        ],
        description: 'A Perfect bowl of Hue Beef Noodle Soup',
        imagePath: 'https://images.unsplash.com/photo-1544068192-4c4af19868c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Thai Shrimp & Curry Soup',
        price: 786,
        ingredients: [
            "Red Curry Paste",
            "Unsweetened Coconut Milk",
            "Beef Briskets",
            "Red Cabbage",
            "Thai Basil",
            "Lime",
            "Clover Garlic",
            "Unsalted Butter"
        ],
        description: 'A Delicious bowl of Thai Shrimp & Curry Soup',
        imagePath: 'https://images.unsplash.com/photo-1576020688457-6f06d17c5702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'French Onion Soup with Everything Croutons',
        price: 589,
        ingredients: [
            "White Wine",
            "French Bread",
            "Caramelised Onions",
            "Cheese",
            "Cognac"
        ],
        description: 'A Bowl of French Onion Soup with Everything Croutons',
        imagePath: 'https://images.unsplash.com/photo-1549203438-a7696aed4dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1286&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Vegan Chickpea Curry Soup',
        price: 499,
        ingredients: [
            "Chickpea",
            "Coriander",
            "Turmeric",
            "Mild Yellow Curry Powder ",
            "Pinch Cayenne",
            "Canola Oil",
            "Choped Onions",
            "Cloves Garlic"
        ],
        description: 'A Vegan Bowl of Chickpea Curry Soup',
        imagePath: 'https://images.unsplash.com/photo-1549203438-a7696aed4dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1286&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'A Beef Burger',
        price: 899,
        ingredients: [
            "Beef",
            "Tomato Slices",
            "Lettuce",
            "Onions ",
            "Tomato Sauce",
        ],
        description: 'A Beef Burger',
        imagePath: 'https://images.unsplash.com/photo-1524817935500-bb9d3a1dd6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Cantaloupe Bowl',
        price: 699,
        ingredients: [
            "Cantaloupe"
        ],
        description: 'A Cantaloupe bowl',
        imagePath: 'https://images.unsplash.com/photo-1524817935500-bb9d3a1dd6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Peaches Bowl',
        price: 799,
        ingredients: [
            "Peaches"
        ],
        description: 'A Sweet Peaches bowl',
        imagePath: 'https://images.unsplash.com/photo-1535869344117-a3cbf6f37466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Kafu Curry Noodle',
        price: 699,
        ingredients: [
            "Kafu",
            "Noodles",
            "Cloves Garlic",
            "Soy Sauce",
            "Red Bell Pepper",
            "Onions"
        ],
        description: 'A Curry Noodles bowl',
        imagePath: 'https://images.unsplash.com/photo-1491961865842-98f7befd1a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            food: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Creamy Latte',
        price: 299,
        ingredients: [
            "Coffee Beans",
            "Soya Milk",
            "Brown Sugar"
        ],
        description: 'A Creamy Latte done to perfection',
        imagePath: 'https://images.unsplash.com/photo-1544421604-b50d59499cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            beverage: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Strawberry Milkshake',
        price: 255,
        ingredients: [
            "Milk",
            "Strawberry Blended",
            "Strawberry Slice",
            "Sugar"
        ],
        description: 'A taste Strawberry Milkshake',
        imagePath: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            beverage: true
        },
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Light Strawberry Milksake',
        price: 399,
        ingredients: [
            "Milk",
            "Strawberry Blended",
            "Sugar"
        ],
        description: 'A taste light Strawberry Milkshake',
        imagePath: 'https://images.unsplash.com/photo-1524230789330-31ce487281ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        type: {
            beverage: true
        },
    })
]

/**
 * @
 */
let done = 0

/**
 * for loop iterating
 * over each product in constant
 * and saving them to database
 * as well as handling response
 */
for(let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        if(err) {
            console.log(err);
            return false;
        } else {
            done++;
            console.log(result);
            if(done === products.length) {
                exit();
            }
        }
    });
}

/**
 * @function
 * @returns {undefined}
 */
function exit() {
    mongoose.disconnect();
}