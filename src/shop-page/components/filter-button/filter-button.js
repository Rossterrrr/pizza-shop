import React from 'react';
import './filter-button.css';

export default class FilterButton extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let classes = 'filter-btn';
        if(this.props.active){
            classes += ' active';
        }
        return (
            <React.Fragment>
                <li className={classes} onClick={this.props.onActive}>{this.props.label}</li>
            </React.Fragment>
            
        )
    }
}