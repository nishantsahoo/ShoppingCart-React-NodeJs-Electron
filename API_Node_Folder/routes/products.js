const route = require('express').Router();
const data = require('../mydata');

// To get Products from the Database
route.get('/', (req, res) => {
    data.getProducts().then((products) => {
    res.send(products);
})
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