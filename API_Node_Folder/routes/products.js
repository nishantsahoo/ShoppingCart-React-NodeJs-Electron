const route = require('express').Router();
const data = require('../mydata');

route.get('/', (req, res) => {
    data.getProducts().then((products) => {
    res.send(products);
})
});


route.get('/getcart', (req, res) => {
    data.getCart().then((cart) => {
    res.send(cart);
})
});

route.post('/decrementCart', (req, res) => {
    data.decrementCart(req.body.id);
res.redirect('/myapi/mycart');
});

route.post('/incrementCart', (req, res) => {
    data.incrementCart(req.body.id);
res.redirect('/myapi/mycart');
});

route.post('/delfromcart', (req, res) => {
    data.delFromCart(req.body.id);
res.redirect('/myapi/mycart');
});

route.get('/countproducts', (req, res) => {
    data.noofproducts().then((count) => {
    res.send('' + count); // CONVERT INTO A STRING ELSE INTEGERS ARE SENT AS STATUS CODE
})
});

route.get('/totalamount', (req, res) => {
    data.totalamount().then((amount) => {
    res.send('' + amount); // CONVERT INTO A STRING ELSE INTEGERS ARE SENT AS STATUS CODE
})
});

module.exports = route;