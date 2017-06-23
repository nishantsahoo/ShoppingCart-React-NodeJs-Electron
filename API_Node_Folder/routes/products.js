const route = require('express').Router();
const data = require('../mydata');

// To add Products to the Products Database
// To add an item to the cart
route.post('/addtoproducts', (req, res) => {
    data.addToProducts(req.body.product);
res.redirect('/myapi/products');
});

// To get Products from the Products Database
route.get('/getproducts', (req, res) => {
    data.getProducts().then((products) => {
    res.send(products);
})
});

module.exports = route;

// this file is the route file for products