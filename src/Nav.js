import React from 'react';

export class Nav extends React.Component{
	handleClick = (content,current,color) => {
		let i, pagecontent, buttons;
		let cb = document.getElementById(current);
		pagecontent = document.getElementsByClassName("page-content"); // Get all content divs
		for(i=0;i<pagecontent.length;i++){
			pagecontent[i].style.display = "none"; // Hide all content
		}
		buttons = document.getElementsByClassName("nav-button");// Get all buttons
		for(i=0;i<buttons.length;i++){
			if(cb !== buttons[i]){
				buttons[i].style.backgroundColor = ""; //Change their background color to none
			}
		}
		// Display the specified content
		document.getElementById(content).style.display = "block";
		cb.style.backgroundColor = color; // Change color of pressed button to color arg
	}
		
	render(){
		return(
			<div id="navbar-container">
				<button class="nav-button" id="eduButton" onClick={() => this.handleClick("educationContent","eduButton","#78416A")}>Education</button>
				<button class="nav-button" id="workButton" onClick={() => this.handleClick("workContent","workButton","#5D4178")}>Work</button>
				<button class="nav-button" id="hobbyButton" onClick={() => this.handleClick("hobbyContent","hobbyButton","#473782")}>Hobbies</button>
			</div>
		);
	}
}