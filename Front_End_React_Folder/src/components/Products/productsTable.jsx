import React from "react";
import axios from "axios";
import Table from "react-bootstrap/es/Table";
import ProductRow from "./productsRow";

export default class Products extends React.Component // definition of the class Products
{
    constructor(props) // definition of the constructor
    {
        super(props);
        this.state = {products: []};
        this.onChange = this.onChange.bind(this);
    } // end of the function definition

    componentDidMount() // definition of the function componentDidMount
    {
        const URL="http://localhost:9000/myapi/products/getproducts";
        axios.get(URL).then(function(response){
            var products = response.data;
            this.setState({products: products});
        }.bind(this));
    } // end of the function definition

    onChange(event) // definition of the function addtocart
    {
        const ADD_TO_CART = "addtocart";
        const PLUS = "plus";
        const MINUS = "minus";
        if(event.target.name == ADD_TO_CART)
        {
            var product = JSON.parse(event.target.id);
            const URL = "http://localhost:9000/myapi/cart/addtocart";
            var prodQuantity = +$('quantity[id=' + product.id + ']').text();
            var cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: prodQuantity,
                amount: prodQuantity*product.price
            };
            console.log(cartItem);
            $('quantity[id=' + product.id + ']').text(1); // set quantity to zero after button click
            axios.post(URL, {product: cartItem}).then(function(response){console.log(response)});
            alert(product.name + ' added to the cart!');
        }
        if(event.target.name == PLUS)
        {
            var quantity = +$('quantity[id=' + event.target.id + ']').text();
            $('quantity[id=' + event.target.id + ']').text(++quantity);
        }
        if(event.target.name == MINUS)
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
        return (
            <div className="container-fluid">
                <div className="card" style={{width: '75%', marginLeft: '12.5%', marginTop: '2em', marginBottom: '2em' , fontFamily: 'monospace'}}>
                    <div className="card-header" style={{fontSize: '2em'}}>Products</div>
                        <div className="card-block" style={{width: '70%', marginLeft: '15%', marginTop: '1em'}}>
                            <div style={{overflowY: 'auto'}}>
                                {this.state.products.map(function(product){
                                    return (
                                        <ProductRow product={product} eventHandler={this.onChange}/>
                                    );
                                }.bind(this))}
                            </div>
                    </div>
                </div>
            </div>
        ) // return
    } // end of the function definition
} // end of the class definition
