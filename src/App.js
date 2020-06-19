import React from 'react';
import './App.css';
import { Nav } from './Nav.js';

export class App extends React.Component{
	render(){
		return(
			<div id="app-wrap">
				<Nav />
				<div class="page-content" id="educationContent"><b>Education text</b></div>
				<div class="page-content" id="workContent"><b>Work text</b></div>
				<div class="page-content" id="hobbyContent"><b>Hobbies text</b></div>
			</div>
		);
	}
}


