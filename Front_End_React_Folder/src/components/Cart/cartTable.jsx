import React from "react";
import axios from "axios";
import Table from "react-bootstrap/es/Table";
import Button from "react-bootstrap/es/Button";

export default class Products extends React.Component // definition of the class Products
{
    constructor(props) // definition of the constructor
    {
        super(props);
        this.state = {products: [], totalamount: 0, noOfProducts: 0};
        this.onChange = this.onChange.bind(this);
        this.cartRefresh = this.cartRefresh.bind(this);
    } // end of the function definition

    componentDidMount() // definition of the function componentDidMount
    {
        this.cartRefresh(); // call of the function cartRefresh
    } // end of the function definition

    cartRefresh() // definition of the function cartRefresh
    {
        var url="http://localhost:9000/myapi/cart/getcart";
        axios.get(url).then(function(response){
            var products = response.data;
            var url="http://localhost:9000/myapi/cart/totalamount";
            axios.get(url).then(function(response){
                var totalamount = response.data;
                var url="http://localhost:9000/myapi/cart/countproducts";
                axios.get(url).then(function(response) {
                    var noOfProducts = response.data;
                    this.setState({products: products, totalamount: totalamount, noOfProducts: noOfProducts});
                }.bind(this))
            }.bind(this))
        }.bind(this))
    } // end of the function cartRefresh

    onChange(event) // definition of the function addtocart
    {
        if(event.target.name == "checkout")
        {
            var url = "http://localhost:9000/myapi/cart/checkout";
            axios.post(url, {id: event.target.id}).then(function(response) {});
            alert('Thank you for shopping!');
            this.cartRefresh(); // call of the function cartRefresh
        }
        if(event.target.name == "cplus")
        {
            var url = "http://localhost:9000/myapi/cart/incrementcart";
            axios.post(url, {id: event.target.id}).then(function(response){});
            setTimeout(function()
            {
                this.cartRefresh(); // call of the function cartRefresh
            }.bind(this), 150); // delay of 0.15s so that the page can be refreshed
        }
        if(event.target.name == "cminus")
        {
            var quantity = +$('quantity[id=' + event.target.id + ']').text();
            if(quantity>1)
            {
                var url = "http://localhost:9000/myapi/cart/decrementcart";
                axios.post(url, {id: event.target.id}).then(function(response){});
                setTimeout(function()
                {
                    this.cartRefresh(); // call of the function cartRefresh
                }.bind(this), 150); // delay of 0.15s so that the page can be refreshed
            }
        }
        if(event.target.name == "remove")
        {
            var url = "http://localhost:9000/myapi/cart/delfromcart";
            axios.post(url, {id: event.target.id}).then(function(response){});
            setTimeout(function()
            {
                this.cartRefresh(); // call of the function cartRefresh
            }.bind(this), 150); // delay of 0.15s so that the page can be refreshed
        }
    } // end of the function addtocart

    render() // definition of the function render
    {
        if(this.state.products=="")
        {
            return (
                <p style={{marginTop:'2em', fontSize: '1.5em', fontFamily: 'monospace'}}>Cart is empty!</p>
            )
        }
        else {
        return (
            <div>
                <h1>Cart</h1>
                <h3>Number of products: {this.state.noOfProducts}</h3>
                <div style={{width: '50%', marginLeft: '25%'}}>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr style={{textAlign: 'center'}}>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Amount</td>
                    </tr>
                    </thead>
                    <tbody style={{overflowY: 'auto', height: '50%'}}>
                    {this.state.products.map(function(product){
                        return (
                            <tr  style={{textAlign: 'center'}}>
                                <td><button className="red" name={'remove'} id={product.id} onClick={this.onChange} style={{float: 'left'}}>X</button>{product.name}</td>
                                <td><price>{product.price}</price></td>
                                <td><button className="red" name={'cminus'} id={product.id} onClick={this.onChange} style={{float: 'left'}}>-</button><quantity id={product.id}>{product.quantity}</quantity><button className="green" name={'cplus'} id={product.id} onClick={this.onChange} style={{float: 'right'}}>+</button></td>
                                <td id={product.id}>{product.amount}</td>
                            </tr>
                        )
                    }.bind(this))}
                    </tbody>
                </Table>
                </div>
                <h3 id="totalcost">Total cost: {this.state.totalamount}</h3>
                <button className="purple" name="checkout" bsStyle="primary" onClick={this.onChange}>Checkout</button>
            </div>
        )}
    } // end of the function definition

} // end of the class definition