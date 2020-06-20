import React, { Component } from 'react';

export class WebsiteList extends Component{
	render(){
		return(
			<li>
				<u>Websites</u>	
				<ul>
					<li>
						<i>Freelance website building! I built this site myself and
						am looking to comission more for friends/others in the near future!</i>
						<ul>
							<li>Written in JavaScript, HTML & CSS</li>
							<li>Dependencies: <p class="sublist-content">Node.js, React.js</p></li>
							<li>Site source code <a href="https://github.com/rolinmb/fbase-react">here</a></li>
						</ul>
					</li>
				</ul>
			</li>
		);
	}
}