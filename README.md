# About

<b>Name:</b> MyCart

<b>Description:</b> Shopping cart implementation using React, NodeJs, MySQL, ExpressJs, axios, cors, sequelize, Babel, 
Webpack, and Electron.

## Prerequisites
<a href="https://nodejs.org/">NodeJS</a> and <a href="https://www.mysql.com/">MySQL</a> should be installed. 

## Installation
```
git clone https://github.com/nishantsahoo/ShoppingCart-React-NodeJs.git
```

## Execution steps

<h3> 1. Web Application</h3>

##### Step 1: Install all node modules using npm
```
cd API_Node_Folder
npm install
cd ..
cd Front_End_React_Folder
npm install
```

##### Step 2: Execute ./API_Node_Folder/seedProductsTable.js file to add products into the products table

##### Step 3: Execute the webpack file
*Note: Use "watch" with webpack to develop and deploy continuously*
```
cd Front_End_React_Folder
.\node_modules\.bin\webpack --watch
```

##### Step 4: Start the API(Express) server
*Note: Express server hosted at localhost:9000*
```
cd API_Node_Folder
npm start
```

##### Step 5: Start the Client (React) server
*Note: React server hosted at localhost:8000*
```
cd Front_End_React_Folder
npm run webapp
```

##### Step 6: Open the browser and navigate to ``` http://localhost:8000/ ```

<h3> 2. Desktop Application</h3>

##### Step 1: Install all node modules using npm
```
cd API_Node_Folder
npm install
cd ..
cd Front_End_React_Folder
npm install
```

##### Step 2: Execute ./API_Node_Folder/seedProductsTable.js file to add products into the products table

##### Step 3: Execute the webpack file
*Note: Use "watch" with webpack to develop and deploy continuously*
```
cd Front_End_React_Folder
.\node_modules\.bin\webpack --watch
```

##### Step 4: Start the API(Express) server
*Note: Express server hosted at localhost:9000*
```
cd API_Node_Folder
npm start
```

##### Step 5: Launch the desktop application
```
cd Front_End_React_Folder
```
```
npm start
```
or
```
npm run desktopapp
```

## Database settings
*Database name: shoppingcart*

*Username: root*

*Password: root*


#### 1. MySQL connection 
``` 
const db = new Sequelize('shoppingcart', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 1000
    }
});
```

#### 2. Tables

1. Products
    ``` 
    id: {
        type: INTEGER,
        primaryKey: true,
    },
    name: STRING,
    price: INTEGER,
    quantity: INTEGER
    ```
    
2. Cart
    ```
    id: {
        type: INTEGER,
        primaryKey: true,
    },
    name: STRING,
    price: INTEGER,
    quantity: INTEGER,
    amount: INTEGER
    ```

## APIs

##### 1. Products: 
``` /myapi/products/ ```

  1. ``` /getproducts ```: To get all products from the products table
  2. ``` /addtoproducts ```: To add a product to the products table
  
##### 2. Cart 
``` /myapi/cart/ ```

  1. ``` /getcart ```: To get all cart items from the cart table
  2. ``` /addtocart ```: To add a product to the cart
  3. ``` /checkout ```: To checkout from the cart (Removes all products from the cart)
  4. ``` /decrementCart ```: To decrease the quantity of a particular cart item
  5. ``` /incrementCart ```: To increase the quantity of a particular cart item
  6. ``` /delfromcart ```: To delete a particular cart item from the cart
  7. ``` /countproducts ```: To count the number of products in a cart
  8. ``` /totalamount ```: To calculate the total amount to be paid
  