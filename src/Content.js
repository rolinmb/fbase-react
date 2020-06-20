import React, { Component } from 'react';
import { Projects } from './content/pages/projects/Projects.js';
import { Experience } from './content/pages/experience/Experience.js';
import { Contact } from './content/pages/contact/Contact.js';
import { About } from './content/pages/about/About.js';

export class Content extends Component{
	render(){
		return(
			<div id="content-wrap">
				<About /> 
				<Experience />
				<Projects />
				<Contact />
			</div>
		);
	}
}