import React from 'react';
import {Link} from 'react-router-dom';
import './empty-cart.css';

export default class EmptyCart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="empty-cart-content">
                <h3>Корзина пустая <i className="material-icons smile">sentiment_dissatisfied</i></h3>
                <div className="empty-cart-description">
                    <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                    <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                </div> 
                <img src="./buy.svg" className="empty-cart-img"></img>
                <Link to="/" className="go-back black">Вернуться на главную</Link>
            </div>
        )
    }
}