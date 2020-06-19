import React from 'react';
import { Projects } from './pages/Projects.js';
import { Experience } from './pages/Experience.js';
import { Contact } from './pages/Contact.js';

export class Content extends React.Component{
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