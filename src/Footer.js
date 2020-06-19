import React, { Component } from 'react';

export class Footer extends Component{
	render(){
		return(
			<div id="footer-wrap">
				<div id='footer-content'>
					<p id="footer-links">Links:
						&nbsp;&nbsp;<a href="https://github.com/rolinmb">GitHub</a>
						/<a href="https://github.com/rolinmb/fbase-react"> Site Source Code</a>
						-&nbsp;&nbsp;<a href="https://linkedin.com/in/rolin-blake">LinkedIn</a>
					</p>
				</div>
			</div>
		);
	}
}