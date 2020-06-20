import React, { Component } from 'react';
import { WebsiteList } from './WebsiteList.js';
import { InvestingList } from './InvestingList.js';
import { WebscrapingList } from './WebscrapingList.js';

export class ProjectList extends Component{
	render(){
		return(
			<ul class="project-list">
				<WebsiteList />	
				<InvestingList />
				<WebscrapingList />
			</ul>
		);
	}
}