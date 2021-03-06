import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
	state={
  	counter:0
  }
  

  renderButtonComponent=(text,callback)=>{
   return (
   <button onClick={() =>callback()} id="crementa">
	{text}
   </button>
   )
  }

	render(){
		return (
		<div>
			<h1> 
			Counter:{this.state.counter}
			</h1>
			{this.renderButtonComponent("Incrementa",() => this.setState({counter: this.state.counter +1}))}
			{this.renderButtonComponent("Decrementa",() => this.setState({counter: this.state.counter -1}))}    	
    	  
    	</div>
      
      
    )
	}
}

export default App;

