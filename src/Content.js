import React from 'react';

export class Content extends React.Component{
	render(){
		return(
			<div id="content-container">
				<div class="page-content" id="projectsContent">
					<div class="content-header">Project over the years...</div>
				</div>
				<div class="page-content" id="experienceContent">
					<div class="content-header">Work &<br />Experience</div>
				</div>
				<div class="page-content" id="hobbyContent">
					<div class="content-header">Some things I like to do in my free time...</div>
				</div>
			</div>
		);
	}
}