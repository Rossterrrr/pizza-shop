import React from 'react';
import './cart.css';
import CartItem from '../cart-item/cart-item';
import {Link} from 'react-router-dom';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            ...this.props,
            cartSum:0,
            itemCount:0
            };
        this.itemsCountCalc = this.itemsCountCalc.bind(this);
        this.cartSumCalc = this.cartSumCalc.bind(this);
    }
    getDOMItems(){
        const elements = this.state.data.map(element => {
            return(
                <CartItem 
                    data={element} 
                    onDecr={() => this.props.onDecr(element.id)} 
                    onIncr={() => this.props.onIncr(element.id)}
                    onDeleteItem = {() => this.props.onDeleteItem(element.id)}
                ></CartItem>
            )
        });
        return elements;
    }
    cartSumCalc(){
        let sum = 0;
        this.state.data.forEach(item => {
            sum += item.sum;
        });
        return sum;
        
    }
    itemsCountCalc(){
        let count = 0;
        this.state.data.forEach(item => {
            count += item.sellcount;
        })
        return count;
    }
    render(){
         
        return(
            <div className="cart-container">
                <div className="cart-header">  
                    <h3><i className="material-icons cart-icon">shopping_cart</i> Корзина</h3>
                    <button className="clear-cart"><i className="material-icons delete-icon">delete</i>Очистить корзину</button>
                </div>
                {this.getDOMItems()}
                <div className="cart-footer">
                    <div className="footer-info">
                        <h4>Всего пицц: <span className="pizza-count">{this.itemsCountCalc()} шт</span></h4>
                        <h4>Сумма заказа: <span className="final-full-price">{this.cartSumCalc()}Р</span></h4>
                    </div>
                    <div className="footer-btns">
                        <Link to="/" className="go-back"><i className="material-icons back">arrow_back_ios</i>Вернуться назад</Link>
                        <button className="buy">Оплатить сейчас</button>
                    </div>
                </div>
            </div>
        )
    }
}