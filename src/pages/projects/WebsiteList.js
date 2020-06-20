import React, { Component } from 'react';

export class WebsiteList extends Component{
	render(){
		return(
			<li>
				<u>Websites</u>	
				<ul>
					<li>
						<i>I built this website over the course of a few weeks, as well as
						am looking to comission others in the near future!</i>
						<ul>
							<li>Languages: JavaScript, HTML, CSS</li>
							<li>Dependencies: Node.js, React.js</li>
							<li>Site source code <a href="https://github.com/rolinmb/fbase-react">here</a></li>
						</ul>
					</li>
				</ul>
			</li>
		);
	}
}