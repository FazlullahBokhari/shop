import React, {Component} from 'react';
import IncreasedButton from './IncreasedButton'; 
import DecreasedButton from './DecreasedButton';
import './App.css';
import butter from './images/butter.png';
import milmacurd from './images/milmacurd.png';
import amulghee from './images/amulghee.png';
import AddToCart from './AddToCart';


class Product extends Component{
    constructor(props){
        super(props);
        this.renderImage = this.renderImage.bind(this);
        this.savePriceAndQty = this.savePriceAndQty.bind(this);
    }

    renderImage() {
        switch(this.props.product.imgurl) {
            case 'milmacurd' :
                return milmacurd;
            case 'butter' :
                return butter;
            case 'amulghee' :
                return amulghee;
            default : return null;
        }
    }

    savePriceAndQty(qty,price) {
        this.props.saveDetails(qty,price);
    }
    render() {
        return (
            <div className= "productList">
            <div className= "shiftLeft">
            <img align="center" src={this.renderImage()} alt={this.props.product.imgurl} width="120" height="95" />
            <br/>
            {this.props.product.offerText}
            </div>
            <div className= "shiftRight">
            {this.props.product.Productname}
            <br/>
            {this.props.product.Brandname}
            <br/>
            {this.props.product.Quantity}
            <br/>
            MRP  {this.props.product.MRP}
            <br/>
            Rs   {this.props.product.Price}
            </div>
            <IncreasedButton productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} IncreasedButtonCallBack = {this.savePriceAndQty}/>
            <DecreasedButton productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} DecreasedButtonCallBack = {this.savePriceAndQty} />
            <AddToCart productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} AddCartCallBack = {this.savePriceAndQty}/>
            </div>
        )
    }
}

export default Product;
