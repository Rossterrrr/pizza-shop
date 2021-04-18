import React from 'react';
import './header.css';

export default class Header extends React.Component{
    constructor(props){
                super(props);
    }
    render(){
        return (
            <div className="header-content">
                <div className="header-content-left">
                    <img src="./logo.png" className="header-logo"></img>
                    <div className="header-content-left-container">
                        <span className="header-name">REACT PIZZA</span>
                        <span className="header-descr">Самая вкусная пицца во вселенной</span>
                    </div>
                </div>
                <div className="header-content-right">
                    <span className="full-price">{this.props.fullPrice}Р</span>  
                    <div className="basket-item-count">
                        <i className="material-icons">shopping_cart</i>
                        <span className="basket-count">{this.props.count}</span>
                    </div>
                </div>
            </div>
        )
    }
}