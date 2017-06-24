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
        alert('On change: ' + event.target.name + ' ' + event.target.id);
        console.log('On change: ' + event.target.name, event.target.id);
    } // end of the function addtocart

    render() // definition of the function render
    {
        return (
            <div>
                <h1>Products Cart</h1>
                <div style={{width: '55%', marginLeft: '22.5%'}}>
                    <Table striped bordered condensed hover>
                        <thead>
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
                                    <tr style={{textAlign: 'center'}}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td><button name={'minus'} id={product.id} onClick={this.onChange} style={{float: 'left'}}>-</button>{product.quantity}<button name={'plus'} id={product.id} onClick={this.onChange} style={{float: 'right'}}>+</button></td>
                                        <td><Button bsStyle="primary" name={'addtocart'} id={product.id} onClick={this.onChange}>Add to Cart</Button></td>
                                    </tr>

                            );
                        }.bind(this))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    } // end of the function definition

} // end of the class definition