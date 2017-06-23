const route = require('express').Router();
const data = require('../mydata');

// To add an item to the cart
route.post('/addtocart', (req, res) => {
    data.addToCart(req.body.product);
res.redirect('/myapi/mycart');
});

// to checkout from the cart
route.post('/checkout', (req, res) => {
    data.cartCheckout(req.body.name);
res.redirect('/myapi/mycart');
});



// this file is the route file for cart