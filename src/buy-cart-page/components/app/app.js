import React from 'react';
import Header from '../header/header';
import Cart from '../cart/cart';
import './app.css';

export default class BuyCartPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		document.body.style.cssText += ` 
			background-color:#FFDF8C;
			font-family: 'Nunito', sans-serif;
		`	 
		return (
			<div className="container">
				<Header></Header>
				<Cart></Cart>
			</div>
			
			
			
		)
			
	}
}
