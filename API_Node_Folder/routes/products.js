const route = require('express').Router();
const data = require('../mydata');

// To get Products from the Database
route.get('/getproducts', (req, res) => {
    data.getProducts().then((products) => {
    res.send(products);
})
});

module.exports = route;

// this file is the route file for products