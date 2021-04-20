import React from 'react';
import Header from '../header/header';
import Cart from '../cart/cart';
import EmptyCart from '../empty-cart/empty-cart';
import './app.css';

export default class BuyCartPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		if(this.props.cart.length != 0){
			return (
				<div className="container">
					<Header></Header>
					<Cart cart={this.props.cart} onDecr={this.props.onDecr} onIncr={this.props.onIncr} onDeleteItem={this.props.onDeleteItem} onClearCart={this.props.onClearCart}></Cart>
				</div>	
			)
		}else{
			return (
				<div className="container">
					<Header></Header>
					<EmptyCart></EmptyCart>
				</div>	
			)
		}
		
			
	}
}
