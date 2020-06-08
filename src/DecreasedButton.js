import React, {Component} from 'react';
import './App.css';

class DecreasedButton extends Component{
    constructor(props){
        super(props);
        this.DecreasePriceAndItem = this.DecreasePriceAndItem.bind(this);
        this.sendCartDetails = this.sendCartDetails.bind(this);
    }

    DecreasePriceAndItem() {
        if(this.props.qty === 0) {
            this.sendCartDetails(0,0);     
        }
        else {
        let priceData = this.props.price - this.props.productDetail.Price;
        let qtyData = this.props.qty - 1;
        this.sendCartDetails(qtyData,priceData);
        }
     }
 
     sendCartDetails(qty, price) {
     this.props.DecreasedButtonCallBack(qty,price);
     }
 

    render() {
        return (
         <div className="buttons">
         <button className="buttonStyle" onClick={this.DecreasePriceAndItem} >-</button>
         </div>
        )
    }
}

export default DecreasedButton;
