import React, { Component } from 'react';
import { Projects } from './pages/projects/Projects.js';
import { Experience } from './pages/experience/Experience.js';
import { Contact } from './pages/contact/Contact.js';

export class Content extends Component{
	render(){
		return(
			<div id="content-wrap">
				<Projects />
				<Experience />
				<Contact />
			</div>
		);
	}
}