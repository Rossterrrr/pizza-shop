import React from 'react';
import FilterButton from '../filter-button/filter-button';
import './filter.css';

export default class FilterPanel extends React.Component{
    constructor(props){
        super(props);
    }
    getCategoryies(){
        const categories = this.props.categories.map(elem => {
            return(
                <FilterButton active={elem.active} label={elem.label} onActive={() => this.props.onActive(elem.id,elem.label)}></FilterButton>
            )
        })
        return categories;
    }
    render(){
        return(
            <ul className="filter-menu">
                {this.getCategoryies()}
            </ul>
            
        )
            
    }
}