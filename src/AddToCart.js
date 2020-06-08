import React, {Component} from 'react';
import './App.css';


class AddToCart extends Component{
    constructor(props){
        super(props);
        this.addPriceAndItem = this.addPriceAndItem.bind(this);
        this.sendCartDetails = this.sendCartDetails.bind(this);
    }

    addPriceAndItem() {
        let priceData = this.props.price + this.props.productDetail.Price;
        let qtyData = this.props.qty + 1;
        this.sendCartDetails(qtyData,priceData);
     }
 
     sendCartDetails(qty, price) {
     this.props.AddCartCallBack(qty,price);
     }
 

    render() {
        return (
         <div className="buttons addButtons ">
         <button className="buttonAdd" onClick={this.addPriceAndItem}>ADD TO CART</button>
         </div>
        )
    }
}

export default AddToCart;
