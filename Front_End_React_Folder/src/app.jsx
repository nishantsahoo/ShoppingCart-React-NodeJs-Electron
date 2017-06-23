import React from "react";
import * as ReactDOM from "react-dom";
import Products from "./components/Products/productsTable";

class App extends React.Component // definition of the class App
{
    render() // definition of the function render
    { return(
        <Products/>
    );
    }
} // end of the class definition

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
