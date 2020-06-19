import React from 'react';

export class Content extends React.Component{
	render(){
		return(
			<div id="content-wrap">
				<div class="page-content" id="projectsContent">
					<div class="content-header">Things I've Developed</div>
					<p class="content">
						<ul>
							<li>Web-Scraping</li>
							<li>Investing</li>
							<li>Webpages</li>
						</ul>
					</p>
				</div>
				<div class="page-content" id="experienceContent">
					<div class="content-header">Experience in Different Areas</div>
					<p class="content">
						<ul>
							<li>Internships</li>
							<li>Courses</li>
						</ul>
					</p>
				</div>
				<div class="page-content" id="contactContent">
					<div class="content-header">Contact Information:</div>
					<p class="content">
						<div class="content-subheader">
							Need your own website?
						</div>
						<p class="content">
							If you want your own website like this, even with a custom URL,<br />
							feel free to get in touch with me and we can get on it!<br /><br />
							<ul class="content-list">
							<li>Email Address &nbsp; - &nbsp;rolin.blake@gmail.com
							</li>
							<li>Mobile Number &nbsp; - &nbsp;331-422-9671
							</li>
						</ul>
						</p>
						<br />
					</p>
				</div>
			</div>
		);
	}
}