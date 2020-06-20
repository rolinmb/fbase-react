import React, { Component } from 'react';

export class About extends Component{
	render(){
		return(
			<div class="page-content" id="aboutContent">
				<div class="content-header">
					Nice to meet you!
				</div>
				<p class="content">
					<ul>
						<li>
							<u>Education</u>
						</li>
						<li>
							<u>Hobbies</u>
						</li>
					</ul>
				</p>
			</div>
		);
	}
}