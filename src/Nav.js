import React, { Component } from 'react';

export class Nav extends Component{
	handleClick = (args) => {
		let contents = document.getElementsByClassName("page-content");
		let buttons = document.getElementsByClassName("nav-button");
		let links = document.getElementsByTagName("a");
		for(let i=0;i<contents.length;i++){
			contents[i].style.display = "none";
		}
		for(let i=0;i<buttons.length;i++){
			if(buttons[i] !== document.getElementById(args["buttonId"])){
				buttons[i].style.backgroundColor = args["footerColor"];
				
			}
			buttons[i].style.color = args["btxtColor"];
		}
		for(let i=0;i<links.length;i++){
			links[i].style.color = args["linksColor"];
		}
		document.getElementById(args["contentId"]).style.display = "block";
		document.getElementById("header-wrap").style.backgroundColor = args["headerColor"];
		document.getElementById("header-text").style.color = args["htxtColor"];
		document.getElementById("app-container").style.backgroundColor = args["pageColor"];
		document.getElementById("navbar-wrap").style.backgroundColor = args["pageColor"];
		document.getElementById(args["buttonId"]).style.backgroundColor = args["buttonColor"];
		document.getElementById(args["contentId"]).style.color = args["ptxtColor"];
		document.getElementById("footer-wrap").style.backgroundColor = args["footerColor"];
		document.getElementById("footer-text").style.color = args["ftxtColor"];
	}
		
	render(){
		let pbuttonArgs = {
			"contentId":"projectsContent",
			"buttonId":"projectButton",
			"buttonColor":"#8ED3DE",
			"pageColor":"#A9BCD0",
			"headerColor":"#373F51",
			"footerColor":"#C7CED1",
			"btxtColor":"#373F51",
			"ptxtColor":"#F2EEE1",
			"htxtColor":"#F2EEE1",
			"ftxtColor":"#F2EEE1",
			"linksColor":"#0F1112",
		}
		let ebuttonArgs = {
			"contentId":"experienceContent",
			"buttonId":"expButton",
			"buttonColor":"#4A4E69",
			"pageColor":"#F2E9E4",
			"headerColor":"#9A8C98",
			"footerColor":"#22223B",
			"btxtColor":"#F2EEE1",
			"ptxtColor":"#22223B",
			"htxtColor":"#F2EEE1",
			"ftxtColor":"#F2EEE1",
			"linksColor":"#D9325A",
		}
		let cbuttonArgs = {
			"contentId":"contactContent",
			"buttonId":"contactButton",
			"buttonColor":"#D9325A",
			"pageColor":"#FDFFFD",
			"headerColor":"#FFD166",
			"footerColor":"#252323",
			"btxtColor":"#FDFFFD",
			"ptxtColor":"#2D3142",
			"htxtColor":"#FDFFFD",
			"ftxtColor":"#F2EEE1",
			"linksColor":"#FFD166",
		}
		
		return(
			<div id="navbar-wrap">
				<button class="nav-button" id="projectButton" onClick={
					() => this.handleClick(pbuttonArgs)}>
					Projects
				</button>
				<button class="nav-button" id="expButton" onClick={
					() => this.handleClick(ebuttonArgs)}>
					Experience
				</button>
				<button class="nav-button" id="contactButton" onClick={
					() => this.handleClick(cbuttonArgs)}>
					Contact
				</button>
			</div>
		);
	}
}