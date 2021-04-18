import React from 'react';
import './cart-item.css';

export default class CartItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cart-items-container">
                <div className="grey-line"></div>
                <div className="cart-item">
                    <div className="main-content">
                        <img src="./1.jpg" className="cart-item-img"></img>
                        <div className="description">
                            <h4 className="cart-item-label">Сырный цепленок</h4>
                            <h5 className="cart-item-characters">тонкое тесто,26 см</h5>
                        </div>
                    </div>
                    <div className="counter">
                        <button className="decr"><i className="material-icons cart-item-add">remove</i></button>
                        <span className="count">3</span>
                        <button className="incr"><i className="material-icons cart-item-remove">add</i></button>
                    </div>
                    <span className="final-price">700Р</span>
                    <button className="delete-cart-item"><i className="material-icons cart-items-clear">clear</i></button>
                </div>

            </div>
        )
    }
}