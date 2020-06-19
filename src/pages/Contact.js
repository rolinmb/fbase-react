import React from 'react';

export class Contact extends React.Component{
	render(){
		return(
			<div class="page-content" id="contactContent">
				<div class="content-header">
					Contact Information:
				</div>
				<p class="content">
					<div class="content-subheader">
						Need your own website?
					</div>
					<br />
					If you want your own website like this, even with a custom URL,
					feel free to get in touch with me and we can get on it!
					<br />
					<br />
					<ul class="contact-list">
						<li>Email Address &nbsp; - <br />
							<p class="contact-item">
								rolin.blake@gmail.com
							</p>
						</li>
						<li>Mobile Number &nbsp; -  <br />
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