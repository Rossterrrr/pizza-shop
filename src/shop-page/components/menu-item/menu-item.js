import React from 'react';
import './menu-item.css';

export default class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.priceCalc = this.priceCalc.bind(this);
    }
    setTesto(){
        switch(this.props.testo){
            case 'classic':
                return (
                    <React.Fragment>
                        <li className="slim">тонкое</li>
                        <li className="classic active-selector">традиционное</li>
                    </React.Fragment> 
                )
            case 'slim':
                return(
                    <React.Fragment>
                        <li className="slim active-selector">тонкое</li>
                        <li className="classic">традиционное</li>
                    </React.Fragment> 
                )
            default:
                console.log('default');
                break;
        }
    }
    setSize(){
        switch(this.props.size){
            case 's':
                return(
                    <React.Fragment>
                        <li className="s active-selector">26 см</li>
                        <li className="m">30 см</li>
                        <li className="l">40 см</li>
                    </React.Fragment>
                )
            case 'm':
                return(
                    <React.Fragment>
                        <li className="s">26 см</li>
                        <li className="m active-selector">30 см</li>
                        <li className="l">40 см</li>
                    </React.Fragment>
                )
            case 'l':
                return(
                    <React.Fragment>
                        <li className="s">26 см</li>
                        <li className="m">30 см</li>
                        <li className="l active-selector">40 см</li>
                    </React.Fragment>
                )
            
        }
    }
    priceCalc(){
        const fatnessRate = this.props.testo === 'slim'?1.2:1;
        const sizeRate = this.props.size ==='s'?0.8:this.props.size === 'm'?1:1.3;
        const fullPrice = Math.round((this.props.price * sizeRate * fatnessRate) / 10) * 10;
        return fullPrice;
    }
    sellCount(){
        return (
            <i className="sell-count">{this.props.sellCount}</i>
        )
    }
    render(){
        return (
            <div className="pizza-block">
                <img src={this.props.src}></img>
                <h3>{this.props.label}</h3>
                <div className="pizza-selector-block">
                    <ul onClick={this.props.onTesto}>
                        {this.setTesto()}
                    </ul>
                    <ul onClick={this.props.onSize}>
                        {this.setSize()}
                    </ul>
                </div>
                <div className="pizza-bottom">
                    <span>{this.priceCalc()}Р</span>
                    <button className="pizza-add" onClick={this.props.onPlus}>+ Добавить {this.sellCount()}</button>
                </div>
            </div>
        )
    }
}