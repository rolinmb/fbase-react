import React from 'react';

export class Content extends React.Component{
	render(){
		return(
			<div id="content-wrap">
				<div class="page-content" id="projectsContent">
					<div class="content-header">Projects over the years...</div>
					<p class="content">
						Projects I have done
					</p>
				</div>
				<div class="page-content" id="experienceContent">
					<div class="content-header">Experience</div>
					<p class="content">
						Experience I have obtained
					</p>
				</div>
				<div class="page-content" id="hobbyContent">
					<div class="content-header">Some things I like to do in my free time!</div>
					<p class="content">
						Things done in free time
					</p>
				</div>
			</div>
		);
	}
}