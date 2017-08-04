import React from "react";

export default class ProductRow extends React.Component{

    onChangeHandler(event)
    {
        this.props.eventHandler(event);
    }

    render(){
        var product = this.props.product;
        return (
            <tr style={{textAlign: 'center'}}>
                <td>{product.name}</td>
                    <td><price>{product.price}</price></td>
                    <td><button className="red" name={'minus'} id={product.id} onClick={this.onChangeHandler.bind(this)} style={{float: 'left'}}>-</button><quantity id={product.id}>{product.quantity}</quantity><button className="green" name={'plus'} id={product.id} onClick={this.onChangeHandler.bind(this)} style={{float: 'right'}}>+</button></td>
                    <td><button className="blue" style={{fontFamily: 'monospace'}} name={'addtocart'} id={JSON.stringify(product)} onClick={this.onChangeHandler.bind(this)}>Add to Cart</button></td>
            </tr>
        );
    }
}