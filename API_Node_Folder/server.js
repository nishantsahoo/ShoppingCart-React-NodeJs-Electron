const express = require('express');
const bodyparser = require('body-parser');
const cors=require('cors'); // to use cors
const app = express(); // express object
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
const ProductsRoute = require('./routes/products'); // route for products
app.use('/myapi/products/', ProductsRoute);
const CartRoute = require('./routes/cart'); // route for cart
app.use('/myapi/cart/', CartRoute);
app.use('/',express.static(__dirname+"/public_static"));
// app listen
app.listen(9000, function () {
    console.log("Server started on http://localhost:9000");
});

// server file