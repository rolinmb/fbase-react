import React, { Component } from 'react';

export class Contact extends Component{
	render(){
		return(
			<div class="page-content" id="contactContent">
				<div class="content-header">
					Contact Information
				</div>
				<p class="content">
					<div class="content-subheader">
						Need some help on a project? Want your own portfolio website?
					</div>
					<br />
					If you want your own website like this (even with a custom URL) or want to work together on some software,
					feel free to get in touch with me and we can get to work on something good!
					<br />
					<br />
					<ul class="page-list">
						<li><u>Email Address</u> &nbsp; <br />
							<p class="contact-item">
								rolin.blake@gmail.com
							</p>
						</li>
						<li><u>Text/Leave a Message at</u> &nbsp; <br />
							<p class="contact-item">
								331-422-9671
							</p>
						</li>
					</ul>
					<br />
				</p>
			</div>
		);
	}
}