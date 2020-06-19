import React, { Component } from 'react';
import './App.css';
import { Nav } from './Nav.js';
import { Content } from './Content.js';

export class App extends Component{
	render(){
		return(
			<div id="app-container">
				<Nav />	
				<Content />
			</div>
		);
	}
}


