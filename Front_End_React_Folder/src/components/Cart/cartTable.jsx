import React from "react";
import axios from "axios";
import Table from "react-bootstrap/es/Table";
import Button from "react-bootstrap/es/Button";

export default class Products extends React.Component // definition of the class Products
{
    constructor(props) // definition of the constructor
    {
        super(props);
        this.state = {products: []};
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
            this.setState({products: products});
        }.bind(this))
        // also set total amount to something on line 90
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
            var quantity = +$('quantity[id=' + event.target.id + ']').text();
            $('quantity[id=' + event.target.id + ']').text(++quantity);
        }
        if(event.target.name == "cminus")
        {
            var quantity = +$('quantity[id=' + event.target.id + ']').text();
            if(quantity>1)
            {
                $('quantity[id=' + event.target.id + ']').text(--quantity);
            }
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
                                <td>{product.name}</td>
                                <td><price>{product.price}</price></td>
                                <td><button name={'cminus'} id={product.id} onClick={this.onChange} style={{float: 'left'}}>-</button><quantity id={product.id}>{product.quantity}</quantity><button name={'cplus'} id={product.id} onClick={this.onChange} style={{float: 'right'}}>+</button></td>
                                <td id={product.id}>{product.amount}</td>
                            </tr>
                        )
                    }.bind(this))}
                    </tbody>
                </Table>
                </div>
                <p id="totalcost"></p>
                <Button name="checkout" bsStyle="primary" onClick={this.onChange}>Checkout</Button>
            </div>
        )}
    } // end of the function definition

} // end of the class definition