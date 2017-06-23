const Sequelize = require('sequelize');
const db = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER
}); // used to define the Table Product

db.sync({}); // executes db.define

const Cart = db.define('carts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    amount: Sequelize.INTEGER
}); // used to define the Table

db.sync({}); // executes db.define

function getProducts () { return Product.findAll(); } // end of the function getProducts

function addToCart (product) // definition of the function addToCart
{
    Cart.findById(product.id).then(cartItem => {
        cartItem.increment('quantity', {by: product.quantity});
    cartItem.increment('amount', {by: product.amount});
    return cartItem;
    })
    return Cart.create(
        {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            amount: product.amount
        });
} // end of the function addToCart

function getCart() // definition of the function getCart
{
    if (Cart.findAll())
        return Cart.findAll();
    else
        return 0;
} // end of the function getCart

function decrementCart(cartItemID) // definition of the function decrementCart
{
    Cart.findById(cartItemID).then(user => {
        user.decrement('quantity', {by: 1});
    user.decrement('amount', {by: user.price});
})
} // end of the function decrementCart

function incrementCart(cartItemID) // definition of the function incrementCart
{
    Cart.findById(cartItemID).then(user => {
        user.increment('quantity', {by: 1});
    user.increment('amount', {by: user.price});
})
} // end of the function incrementCart

function noofproducts() // definition of the function noofproducts
{
    if(Cart.sum('quantity'))
        return Cart.sum('quantity');
    else
        return 0;
} // end of the function noofproducts

function totalamount() // definition of the function totalamount
{
    if(Cart.sum('amount'))
        return Cart.sum('amount');
    else
        return 0;
} // end of the function totalamount

function cartCheckout(data) { Cart.destroy({ where: {}}); } // end of the function cartCheckout

function delFromCart(cartItemID) // definition of the function delFromCart
{
    return Cart.destroy(
        {
            where:
                {
                    id: cartItemID
                }
        });
} // end of the function delFromCart

module.exports = {
    getProducts,
    addToCart,
    getCart,
    cartCheckout,
    noofproducts,
    totalamount,
    delFromCart,
    incrementCart,
    decrementCart
};

// all exported files