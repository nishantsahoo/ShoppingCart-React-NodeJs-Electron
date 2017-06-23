import React from "react";
import axios from "axios";

export default class Products extends React.Component{

    constructor(props){
        super(props);
        this.state = {products: []};
    }

    componentDidMount(){
        var url="http://localhost:9000/myapi/products/getproducts";
        // var config={};
        // config.headers={
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
        axios.get(url).then(function(response){
            var products = response.data;
            this.setState({products: products});
        }.bind(this))
    }

    render()
    {
        return (
            <div>
                <p>wtf</p>
                <table>
                    {this.state.products.map(function(product){
                        return (
                        <tr id={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                        )
                    })}
                </table>
            </div>

    ) }
}