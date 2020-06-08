import React, {Component} from 'react';
import './App.css';


class IncreasedButton extends Component{
    constructor(props){
        super(props);
        this.addPriceAndItem = this.addPriceAndItem.bind(this);
        this.sendCartDetails = this.sendCartDetails.bind(this);
    }

    addPriceAndItem() {
       let priceData = this.props.productDetail.Price + this.props.price;
       let qtyData = this.props.qty + 1;
       this.sendCartDetails(qtyData,priceData);
    }

    sendCartDetails(qty, price) {
    this.props.IncreasedButtonCallBack(qty,price);
    }

    render() {
        return (
         <div className="buttons">
         <button className="buttonStyle" onClick={this.addPriceAndItem} >+</button>
         </div>
        )
    }
}

export default IncreasedButton;
