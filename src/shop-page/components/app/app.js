import React from 'react';
import Header from '../header/header';
import FilterPanel from '../filter/filter';
import './app.css';
import MenuList from '../menu-list/menu-list';

export default class MainPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			categories:[{
					label:'Все',
					active:true,
					id:0
				},{
					label:'Мясные',
					active:false,
					id:1
				},
				{
					label:'Вегетарианские',
					active:false,
					id:2
				},{
					label:'Гриль',
					active:false,
					id:3
				},{
					label:'Острые',
					active:false,
					id:4
				},{
					label:'Закрытые',
					active:false,
					id:5
				}],
			data:[{
				src:'./1.jpg',
				label:'Пепперони',
				description:'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
				price:520,
				id:0,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Острые'
			},{
				src:'./2.jpg',
				label:'Кисло-сладкий цыпленок',
				description:'Цыпленок, кисло-сладкий соус, моцарелла, томатный соус',
				price:350,
				id:1,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Мясные'
			},{
				src:'./3.jpg',
				label:'Ветчина и сыр',
				description:'Ветчина, моцарелла, соус альфредо',
				price:370,
				id:2,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Мясные'
			},{
				src:'./4.jpeg',
				label:'Ветчина и грибы',
				description:'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус',
				price:380,
				id:3,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Вегетарианские'
			},{
				src:'./5.jpeg',
				label:'Маргарита ',
				description:'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
				price:540,
				id:4,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Закрытые'
			},{
				src:'./6.jpeg',
				label:'Чизбургер-пицца',
				description:'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла',
				price:460,
				id:5,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Закрытые'
			},{
				src:'./7.jpg',
				label:'Сырный цыпленок',
				description:'Цыпленок, моцарелла, сырный соус, томаты',
				price:510,
				id:6,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Гриль'
			},{
				src:'./8.jpeg',
				label:'Аррива!',
				description:'Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
				price:390,
				id:7,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Острые'
			},{
				src:'./9.jpeg',
				label:'Песто',
				description:'Цыпленок, соус песто, кубики брынзы, томаты черри, моцарелла, соус альфредо',
				price:320,
				id:8,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Мясные'
			},{
				src:'./10.jpeg',
				label:'Карбонара',
				description:'Бекон, сыры чеддер и пармезан, моцарелла, томаты черри, красный лук, чеснок, соус альфредо, итальянские травы',
				price:310,
				id:9,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Закрытые'
			},{
				src:'./11.jpg',
				label:'Гавайская',
				description:'Цыпленок, ананасы, моцарелла, томатный соус',
				price:470,
				id:10,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Острые'
			},{
				src:'./12.jpg',
				label:'Мексиканская',
				description:'Острый цыпленок, острый перец халапеньо, соус сальса, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
				price:540,
				id:11,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Острые'
			},{
				src:'./13.jpg',
				label:'Четыре сезона',
				description:'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, томатный соус, итальянские травы',
				price:500,
				id:12,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Вегетарианские'
			},{
				src:'./14.jpeg',
				label:'Додо',
				description:'Бекон, митболы из говядины, пикантная пепперони, моцарелла, томаты черри, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус',
				price:400,
				id:13,
				testo:'classic',
				size:'m',
				sellcount:0,
				visible:true,
				type:'Острые'
			}],
			count:0,
			fullPrice:0
		}
		this.onCategories=this.onCategories.bind(this);
		this.onTesto = this.onTesto.bind(this);
		this.onSize = this.onSize.bind(this);
		this.onPlus = this.onPlus.bind(this);
	}
	onCategories(id,label){
		let newData = JSON.parse(JSON.stringify(this.state.data));
		newData.map(item => {
			item.visible = false;
			return item;
		})
		newData.map(item => {
			if (item.type === label || label === 'Все'){
				item.visible = true;
			}
			return item;
		})
		this.setState({data:newData});
		this.setState(({categories}) => {
			const newArr = categories.map(elem => {
				elem.active = false;
				if (elem.id === id){
					elem.active = !elem.active;
				}
				return elem; 
			       
			})
			return{
				categories:newArr
			}
		})
	}
	onTesto(e,id){
		console.log(e.target);
		this.setState(({data}) => {
			const newArr = data.map((item) => {
				if(item.id === id){
					if(e.target.classList.contains('active-selector')){
						item.testo = e.target.className.slice(0,e.target.className.search(/ active.+/));
					}else {
						item.testo = e.target.className;
					}
					
				}
				return item;
			})
			return{
				data:newArr
			}
		})
	}
	onSize(e,id){
		console.log(e.target);
		this.setState(({data}) => {
			const newArr = data.map(item => {
				if(item.id === id){
					if(e.target.classList.contains('active-selector')){
						item.size = e.target.className.slice(0,e.target.className.search(/ active.+/));
					}else {
						item.size = e.target.className;
					}
				}
				return item;
			})
			return{
				data:newArr
			}
		})
	}
	onPlus(id){
		let newData = JSON.parse(JSON.stringify(this.state.data));
		let currentItemPrice;
		newData.map(item => {
			if(item.id === id){
				item.sellcount += 1;
				currentItemPrice = item.price; 
			}
			return item;
		})
		console.log(newData);
		this.setState({data:newData})
		this.setState(prevState => {
			return{
				fullPrice:prevState.fullPrice + currentItemPrice
			}
		})
		this.setState(prevState => {
			return {
				count:prevState.count + 1
			}
		})

	}
	render(){
		document.body.style.cssText = `
			background-color:#FFDF8C;
			font-family: 'Nunito', sans-serif;
		`;
		return (
			<div className="container">
				<Header fullPrice={this.state.fullPrice} count={this.state.count}></Header>
				<FilterPanel categories={this.state.categories} onActive={this.onCategories}></FilterPanel>
				<MenuList itemList={this.state.data} onTesto={this.onTesto} onSize={this.onSize} onPlus={this.onPlus}></MenuList>
			</div>
			
			
			
		)
			
	}
}
