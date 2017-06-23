import React from "react";
import axios from "axios";
import Table from "react-bootstrap/es/Table";
import Button from "react-bootstrap/es/Button";

export default class Products extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {products: []};
    }

    componentDidMount()
    {
        var url="http://localhost:9000/myapi/products/getproducts";
        axios.get(url).then(function(response){
            var products = response.data;
            this.setState({products: products});
        }.bind(this))
    }

    render()
    {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Add to Cart</td>
                        </tr>
                    </thead>
                    {this.state.products.map(function(product){
                        return (
                            <tbody>
                                <tr id={product.id}>
                                    <td id={product.id}>{product.name}</td>
                                    <td id={product.id}>{product.price}</td>
                                    <td id={product.id}>{product.quantity}</td>
                                    <td><Button bsStyle="primary">Add to Cart</Button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>

    ) }
}