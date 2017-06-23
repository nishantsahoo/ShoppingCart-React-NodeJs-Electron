import React from "react";
import * as ReactDOM from "react-dom";
import Products from "./components/Products/productsTable";
import Cart from "./components/Cart/cartTable";

class App extends React.Component // definition of the class App
{
    render() // definition of the function render
    {
        return(
            <div>
                <Products/>
                <Cart/>
            </div>
    );
    }
} // end of the class definition

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
