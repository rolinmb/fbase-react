import React from 'react';

export class Nav extends React.Component{
	handleClick = (content,current,hColor,pColor,color3) => {
		let b = document.getElementById(current);
		let contents = document.getElementsByClassName("page-content");
		let buttons = document.getElementsByClassName("nav-button");
		if(buttons.length == contents.length){
			for(let i=0;i<contents.length;i++){
				contents[i].style.display = "none";
				buttons[i].style.backgroundColor = document.getElementById("footer-wrap").style.color;
			}
		}else{
			for(let i=0;i<contents.length;i++){
				contents[i].style.display = "none";
			}
			for(let i=0;i<buttons.length;i++){
				if(buttons[i] !== b){
					buttons[i].style.backgroundColor = document.getElementById("footer-wrap").style.color;
				}
			}
		}
		document.getElementById(content).style.display = "block";
		b.style.backgroundColor = hColor;
		document.getElementById("app-container").style.backgroundColor = pColor;
		document.getElementById("navbar-wrap").style.backgroundColor = pColor;
	}
		
	render(){
		return(
			<div id="navbar-wrap">
				<button class="nav-button" id="projectButton" onClick={
					() => this.handleClick("projectsContent","projectButton","#1A2F70","#8900F2","")}>
					Projects
				</button>
				<button class="nav-button" id="expButton" onClick={
					() => this.handleClick("experienceContent","expButton","#2F2A33","#6A00F4","")}>
					Experience
				</button>
				<button class="nav-button" id="hobbyButton" onClick={
					() => this.handleClick("hobbyContent","hobbyButton","#332336","#2D00F7","")}>
					Hobbies
				</button>
			</div>
		);
	}
}