const express = require('express');
const bodyparser = require('body-parser');
const app = express(); // express object
const cors=require('cors'); // to use cors

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + "/public_static"));
app.use(cors());
const ProductsRoute = require('./routes/products'); // route for products
app.use('/myapi/products/', MyApiRoute);
const CartRoute = require('./routes/cart'); // route for cart
app.use('/myapi/cart/', CartRoute);

// app listen
app.listen(9000, function () {
    console.log("Server started on http://localhost:9000");
});

// server file