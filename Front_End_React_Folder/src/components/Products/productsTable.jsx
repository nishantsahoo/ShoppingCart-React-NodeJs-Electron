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
    } // end of the function definition

    componentDidMount() // definition of the function componentDidMount
    {
        var url="http://localhost:9000/myapi/products/getproducts";
        axios.get(url).then(function(response){
            var products = response.data;
            this.setState({products: products});
        }.bind(this));
    } // end of the function definition

    addtocart() // definition of the function addtocart
    {
        alert('Add to cart');
    } // end of the function addtocart

    render() // definition of the function render
    {
        return (
            <div style={{width: '50%', height: '50%', overflow: 'true'}}>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr style={{textAlign: 'center'}}>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Add to Cart</td>
                        </tr>
                    </thead>
                    {this.state.products.map(function(product){
                        return (
                            <tbody>
                                <tr style={{textAlign: 'center'}} id={product.id}>
                                    <td id={product.id}>{product.name}</td>
                                    <td id={product.id}>{product.price}</td>
                                    <td id={product.id}><button style={{float: 'left'}}>-</button>{product.quantity}<button style={{float: 'right'}}>+</button></td>
                                    <td><Button bsStyle="primary" id={product.id} onClick={this.addtocart.bind(this)}>Add to Cart</Button></td>
                                </tr>
                            </tbody>
                        );
                    }.bind(this))}
                </Table>
            </div>

        )
    } // end of the function definition

} // end of the class definition