const Sequelize = require('sequelize');
const db = new Sequelize('shoppingcart', 'root', 'root', {
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

products = [
    {
        "name": 'Motorola G5',
        "price": 15000,
        "quantity": 1,
    },
    {
        "name": 'One Plus 5',
        "price": 30000,
        "quantity": 1,
    },
    {
        "name": 'Iphone 7',
        "price": 42500,
        "quantity": 1,
    },
    {
        "name": 'Samsung Galaxy 8',
        "price": 64500,
        "quantity": 1,
    },
    {
        "name": 'Redmi Note 4',
        "price": 11000,
        "quantity": 1,
    },
    {
        "name": 'Lenovo Vibe K5',
        "price": 8000,
        "quantity": 1,
    },
    {
        "name": 'Google Pixel',
        "price": 43000,
        "quantity": 1,
    },
    {
        "name": 'Honor 6X',
        "price": 12000,
        "quantity": 1,
    },
    {
        "name": 'HTC Desire 10 Pro',
        "price": 21415,
        "quantity": 1,
    },
    {
        "name": 'Sony Xperia X Dual',
        "price": 43000,
        "quantity": 1,
    }
]


Product.bulkCreate(products); // creating bulk products