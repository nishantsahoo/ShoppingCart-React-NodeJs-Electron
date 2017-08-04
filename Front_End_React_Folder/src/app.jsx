import React from "react";
import * as ReactDOM from "react-dom";
import Products from "./components/Products/productsTable";
import Cart from "./components/Cart/cartTable";
import Button from "react-bootstrap/es/Button";

class App extends React.Component // definition of the class App
{
    constructor(props) // definition of the constructor
    {
        super(props);
        this.state = {currentComponent: <Products/>};
        this.onButtonClick = this.onButtonClick.bind(this);
    } // end of the function constructor

    onButtonClick(event) // definition of the function onButtonClick
    {
        if(event.target.name=="products")
        {
            this.setState({currentComponent: <Products/>});
        }
        if(event.target.name=="cart")
        {
            this.setState({currentComponent: <Cart/>});
        }
    } // end of the function onButtonClick

    render() // definition of the function render
    {
        var currentComponent = this.state.currentComponent;
        return (
            <div style={{marginTop: '1em'}}>
                <div style={{alignSelf: 'center'}}><Button bsStyle="info" id="productsTab" name="products" style={{marginRight: '1.5em', fontSize: '1.5em'}} onClick={this.onButtonClick}>Products</Button><Button id="cartTab" name="cart" onClick={this.onButtonClick} bsStyle="info" style={{marginLeft: '1.5em', fontSize: '1.5em'}}>Cart</Button></div>
                {currentComponent}
            </div>
        );
    };
} // end of the class definition

var app = <App/>;
var node = document.getElementById("app");
ReactDOM.render(app, node);
