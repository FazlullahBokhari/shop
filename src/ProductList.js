import React, {Component} from 'react'; 
import products from './products.json'
import Product from './Product';
import Modal from './Modal'

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};


class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
        prdtsData : []  ,
        totalQuantity : 0,
        totalPrice : 0 ,
        isModalOpen: false
        }
        this.fetchJSONData = this.fetchJSONData.bind(this);
        this.renderProducts = this.renderProducts.bind(this);
        this.saveAllDetails = this.saveAllDetails.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderModal = this.renderModal.bind(this);
    
    }

    fetchJSONData() {
       this.setState({
           prdtsData : products
       }) 
    }

    renderProducts(){
        return( this.state.prdtsData.map((prod, index) =>{ 
                return (<Product key={index} product= {prod} qty={this.state.totalQuantity} price={this.state.totalPrice} saveDetails={this.saveAllDetails}/> )
            })
          )
    }

    saveAllDetails(quantity,price) {
        this.setState({
            totalQuantity : quantity,
            totalPrice : price
        });

    }


    renderModal() {
        if(this.state.totalQuantity === 0) {
            this.setState({
                totalPrice : 0
            })
        }
        this.setState({
            isModalOpen: true
        })
        debugger;
        return(<Modal/>);
    }

    closeModal() {
		this.setState({
			isModalOpen: false
		});
    }

    componentDidMount() {
        this.fetchJSONData();
}
        render() {
        return (
            <div>
            <h1 style={{textAlign : "center", color:"blue"}}>Products List</h1>
            {this.renderProducts()}
            <Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
                <b>
                    Total Price of Purchased Products is {this.state.totalPrice}.
                    <br/>
                    Transanction is Successful
                </b>
					<button
						style={{
							...mainStyle.button,
							margin: 0,
							width: "auto",
                            marginTop: 25
						}}
						onClick={this.closeModal}
					>
						Close
					</button>
			</Modal>
            <div className="cartList">
                <div className = "qtyPriceList">
                    <b> Quantity : {this.state.totalQuantity}</b>
                    <br/> 
                    <b>Price : {this.state.totalPrice}</b>
                </div>
                <div className="checkoutList ">
                <button className="buttonAdd buttonCheckout" onClick={this.renderModal}> CHECKOUT </button>    
                </div>  
            </div>
            </div>
        )
    }
}

export default ProductList;
