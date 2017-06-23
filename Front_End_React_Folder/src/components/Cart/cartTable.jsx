import React from "react";
import axios from "axios";
import Table from "react-bootstrap/es/Table";

export default class Products extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {products: []};
    }

    componentDidMount()
    {
        var url="http://localhost:9000/myapi/cart/getcart";
        axios.get(url).then(function(response){
            var products = response.data;
            this.setState({products: products});
        }.bind(this))
    }

    render()
    {
        if(this.state.products=="")
        {
            return (
                <p>Cart is empty</p>
            )
        }
        else {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Amount</td>
                    </tr>
                    </thead>
                    {this.state.products.map(function(product){
                        console.log(product);
                        return (
                            <tbody>
                            <tr id={product.id}>
                                <td id={product.id}>{product.name}</td>
                                <td id={product.id}>{product.price}</td>
                                <td id={product.id}>{product.quantity}</td>
                                <td id={product.id}>{product.amount}</td>
                            </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>

        )} }
}