import React from "react";

export default class ProductRow extends React.Component // definition of the class ProductRow
{
    onChangeHandler(event) // definition of the function onChangeHandler
    {
        this.props.eventHandler(event);
    } // end of the function definition

    render() // render
    {
        var product = this.props.product;
        return (
            <div id={product.id} style={{borderStyle: "solid", borderWidth: '0.01em', borderColor: '#ccc', marginBottom: "1em"}}>
                <h3>Name: {product.name}</h3>
                <h3><price>Price: {product.price}</price></h3>
                <h3><button className="red" name="minus" id={product.id} onClick={this.onChangeHandler.bind(this)}>-</button><quantity id={product.id}>{product.quantity}</quantity><button className="green" name={'plus'} id={product.id} onClick={this.onChangeHandler.bind(this)}>+</button></h3>
                <h3><button className="blue" style={{fontFamily: 'monospace'}} name={'addtocart'} id={JSON.stringify(product)} onClick={this.onChangeHandler.bind(this)}>Add to Cart</button></h3>
                <div className="card" style={{width: "20em"}}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    } // render
}; // end of the class definition