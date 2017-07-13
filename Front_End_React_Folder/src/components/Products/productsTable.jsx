import React from "react";
import axios from "axios";
import ProductRow from "./productsRow";
import Table from "react-bootstrap/es/Table";

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
        var url="http://localhost:9000/myapi/products/getproducts";
        axios.get(url).then(function(response){
            var products = response.data;
            this.setState({products: products});
        }.bind(this));
    } // end of the function definition

    onChange(event) // definition of the function addtocart
    {
        // alert('On change: ' + event.target.name + ' ' + event.target.id);
        // console.log('On change: ' + event.target.name, event.target.id);
        if(event.target.name=="addtocart")
        {
            var product = JSON.parse(event.target.id);
            var url = "http://localhost:9000/myapi/cart/addtocart";
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
            axios.post(url, {product: cartItem}).then(function(response){console.log(response)});
            alert(product.name + ' added to the cart!');
        }
        if(event.target.name == "plus")
        {
            var quantity = +$('quantity[id=' + event.target.id + ']').text();
            $('quantity[id=' + event.target.id + ']').text(++quantity);
        }
        if(event.target.name == "minus")
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
            <div>
                <div className="card" style={{width: '50%', marginLeft: '25%', marginTop: '2em', fontFamily: 'monospace'}}>
                <div className="card-header" style={{fontSize: '2em'}}>Products</div>
                <div className="card-block" style={{width: '70%', marginLeft: '15%', marginTop: '1em'}}>
                    <Table striped bordered condensed hover fill>
                        <thead style={{fontWeight: 'bold'}}>
                            <tr style={{textAlign: 'center'}}>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Add to Cart</td>
                            </tr>
                        </thead>
                        <tbody style={{overflowY: 'auto', height: '50%'}}>
                        {this.state.products.map(function(product){
                            return (
                                    // <ProductRow product={product}/>
                                    <tr style={{textAlign: 'center'}}>
                                        <td>{product.name}</td>
                                        <td><price>{product.price}</price></td>
                                        <td><button className="red" name={'minus'} id={product.id} onClick={this.onChange} style={{float: 'left'}}>-</button><quantity id={product.id}>{product.quantity}</quantity><button className="green" name={'plus'} id={product.id} onClick={this.onChange} style={{float: 'right'}}>+</button></td>
                                        <td><button className="blue" style={{fontFamily: 'monospace'}} name={'addtocart'} id={JSON.stringify(product)} onClick={this.onChange}>Add to Cart</button></td>
                                    </tr>
                            );
                        }.bind(this))}
                        </tbody>
                    </Table>
                </div>
                </div>
            </div>
        )
    } // end of the function definition

} // end of the class definition