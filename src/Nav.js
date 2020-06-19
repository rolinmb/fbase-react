import React from 'react';

export class Nav extends React.Component{
	handleClick = (content,current,color) => {
		let i, contents, buttons;
		let b = document.getElementById(current);
		contents = document.getElementsByClassName("page-content");
		for(i=0;i<contents.length;i++){
			contents[i].style.display = "none"; // Hide
		}
		buttons = document.getElementsByClassName("nav-button");
		for(i=0;i<buttons.length;i++){
			if(b !== buttons[i]){
				buttons[i].style.backgroundColor = "#0C0032";
			}
		}
		// Display the specified content
		document.getElementById(content).style.display = "block";
		b.style.backgroundColor = color; // Change color of pressed button to color arg
	}
		
	render(){
		return(
			<div id="navbar-container">
				<button class="nav-button" id="projectButton" onClick={() => this.handleClick("projectsContent","projectButton","#78416A")}>Projects</button>
				<button class="nav-button" id="expButton" onClick={() => this.handleClick("experienceContent","expButton","#5D4178")}>Experience</button>
				<button class="nav-button" id="hobbyButton" onClick={() => this.handleClick("hobbyContent","hobbyButton","#473782")}>Hobbies</button>
			</div>
		);
	}
}