import React from 'react';
import './cart-item.css';

export default class CartItem extends React.Component{
    constructor(props){
        super(props);
    }
    getTestoCharacters(){
        return this.props.data.testo === 'classic'?'классическое тесто':'тонкое тесто';
    }
    getPizzaSize(){
        return this.props.data.size === 's'?'26 см':this.props.data.size === 'm'?'30 см':'40 см';
    }
    render(){
        return(
            <div className="cart-items-container">
                <div className="grey-line"></div>
                <div className="cart-item">
                    <div className="main-content">
                        <img src={this.props.data.src} className="cart-item-img"></img>
                        <div className="description">
                            <h4 className="cart-item-label">{this.props.data.label}</h4>
                            <h5 className="cart-item-characters">{this.getTestoCharacters()},{this.getPizzaSize()}</h5>
                        </div>
                    </div>
                    <div className="configurator">
                        <div className="counter">
                            <button className="decr" onClick={this.props.onDecr}><i className="material-icons cart-item-add">remove</i></button>
                            <span className="count">{this.props.data.sellcount}</span>
                            <button className="incr" onClick={this.props.onIncr}><i className="material-icons cart-item-remove">add</i></button>
                        </div>
                        <span className="final-price">{this.props.data.sum}Р</span>
                        <button className="delete-cart-item" onClick={this.props.onDeleteItem}><i className="material-icons cart-items-clear">clear</i></button>
                    </div>
                    
                </div>

            </div>
        )
    }
}