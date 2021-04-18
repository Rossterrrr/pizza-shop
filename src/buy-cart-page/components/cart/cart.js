import React from 'react';
import './cart.css';
import CartItem from '../cart-item/cart-item';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cart-container">
                <div className="cart-header">  
                    <h3><i className="material-icons cart-icon">shopping_cart</i> Корзина</h3>
                    <button className="clear-cart"><i className="material-icons delete-icon">delete</i>Очистить корзину</button>
                </div>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <div className="cart-footer">
                    <div className="footer-info">
                        <h4>Всего пицц: <span className="pizza-count">3 шт</span></h4>
                        <h4>Сумма заказа: <span className="final-full-price">700Р</span></h4>
                    </div>
                    <div className="footer-btns">
                        <button className="go-back"><i className="material-icons back">arrow_back_ios</i>Вернуться назад</button>
                        <button className="buy">Оплатить сейчас</button>
                    </div>
                </div>
            </div>
        )
    }
}