const route = require('express').Router();
const data = require('../mydata');

// To get Cart items from the database
route.get('/getcart', (req, res) => {
    data.getCart().then((cart) => {
    res.send(cart);
})
});

// To add an item to the cart
route.post('/addtocart', (req, res) => {
    data.addToCart(req.body.product);
res.redirect('/myapi/mycart');
});

// To checkout from the cart
route.post('/checkout', (req, res) => {
    data.cartCheckout(req.body.name);
res.redirect('/myapi/mycart');
});

// To decrease the quantity of a particuler Cart item by 1
route.post('/decrementCart', (req, res) => {
    data.decrementCart(req.body.id);
res.redirect('/myapi/mycart');
});

// To increase the quantity of a particular Cart item by 1
route.post('/incrementCart', (req, res) => {
    data.incrementCart(req.body.id);
res.redirect('/myapi/mycart');
});

// To delete a Cart item from the Cart (Database)
route.post('/delfromcart', (req, res) => {
    data.delFromCart(req.body.id);
res.redirect('/myapi/mycart');
});

// To count the number of products in the Cart
route.get('/countproducts', (req, res) => {
    data.noofproducts().then((count) => {
    res.send('' + count); // CONVERT INTO A STRING ELSE INTEGERS ARE SENT AS STATUS CODE
})
});

// To calculate the total amount of the Cart items
route.get('/totalamount', (req, res) => {
    data.totalamount().then((amount) => {
    res.send('' + amount); // CONVERT INTO A STRING ELSE INTEGERS ARE SENT AS STATUS CODE
})
});

// this file is the route file for cart