import React, { Component } from 'react';
import { ProjectList } from './ProjectList.js';

export class Projects extends Component{
	render(){
		return(
			<div class="page-content" id="projectsContent">
				<div class="content-header">
					Things I've Developed
				</div>
				<p class="content">
					<ProjectList />
				</p>
			</div>
		);
	}
}