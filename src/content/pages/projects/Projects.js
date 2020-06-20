import React, { Component } from 'react';
import { WebsiteList } from './WebsiteList.js';
import { InvestingList } from './InvestingList.js';
import { WebscrapingList } from './WebscrapingList.js';

export class Projects extends Component{
	render(){
		return(
			<div class="page-content" id="projectsContent">
				<div class="content-header">
					Tools of mine!
				</div>
				<p class="content">
					<WebsiteList />
					<InvestingList />
					< WebscrapingList />
				</p>
			</div>
		);
	}
}