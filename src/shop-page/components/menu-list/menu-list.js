import React from 'react';
import './menu-list.css';
import MenuItem from '../menu-item/menu-item';

export default class MenuList extends React.Component{
    constructor(props){
        super(props);
    }
    getItemList(){
        const elements = this.props.itemList.map((item) => {
            if(item.visible){
                return (
                    <MenuItem 
                        src={item.src} 
                        label={item.label} 
                        price={item.price} 
                        testo={item.testo} 
                        size={item.size} 
                        sellCount={item.sellcount} 
                        onTesto={(e) => this.props.onTesto(e,item.id)} 
                        onSize={(e) => this.props.onSize(e,item.id)} 
                        onPlus={() => this.props.onPlus(item.id)}>
                    </MenuItem>
                )
            }
        })
        return elements;
    }
    render(){
        return (
            <div className="pizza-list">
                {this.getItemList()}
            </div>
        )
    }
}