import React, { Component } from 'react';

export class Experience extends Component{
	render(){
		return(
			<div class="page-content" id="experienceContent">
				<div class="content-header">
					Experience in Different Areas
				</div>
				<p class="content">
					<br />
					<ul class="page-list">
						<li>
							<u>Internships</u>
							<br />
							<ul>
								<li>
									Over the summers of 2018 and 2019 I interned at <a href='https://relia-source.com'>Relia-Source LLC</a>, a small healthcare startup in the Chicagoland suburbs.
									Beyond helping with day-to-day tasks such as handling client refunds, keeping the website and inventory up to date and relaying information to executive officers;
									I built software tools to help make work easier for other employees.<br /><br />
								</li>
								<li>
									Mentioned in more detail on the 'Projects' page, the software I spent the most time on was an Excel file builder used for importing items onto Relia-Sources live database.
									The Python script took a text file of <a href='https://www.idmedicaid.com/Reference/NDC%20Format%20for%20Billing%20PAD.pdf'>NDC Codes</a> as an input, then formatted a
									query for <a href='https://ndclist.com'>ndclist.com</a> to pull up the coressponding drug information for each NDC. With the help of <a href='https://pypi.org/project/beautifulsoup4/'>BeautifulSoup</a>
									, the webpage HTML content would then be scraped for necessary information needed to represent and build the item for customers to purchase from Relia-Soure's client portal.<br /><br />
								</li>
								<li>
									Beyond web-scraping, another smaller project of mine during these two internships was data visualization with Python. Relia-Source's database contains historical records of client purchases,
									as well as vendor sales through the portal. Using Python's Matplotlib library, I was able to create charts regarding distributions of inventory item sales per client and/or per vendor.<br />
								</li>
							</ul>
						</li>
						<li>
							<u>Programming Languages/Utilities</u>
							<br />
							<ul>
								<li>
									My most used language by far is Python for the plethora of useful libraries surrounding it; however I tend to use JavaScript frequently and Node.js for the utility it provides. Beyond
									those two languages I am familiar with Java, C/C++, and MATLAB from courses at Iowa State University.<br /><br />
								</li>
								<li>
									For web development, I primarily use React.js and traditional HTML/CSS for formatting and styling alongside some Bootrstap elements. I like to build sites from the ground up without any
									sort of template. That's how I built this site! I've been using <a href='https://firebase.google.com'>Google Firebase</a> and the corresponding <a href='https://npmjs.com'>npm</a>&nbsp;
									to deploy this site as well.<br /><br />
								</li>
								<li>
									As far as develpoing environments, I use Windows primarily but am familiar with Linux (Ubuntu/Slackware) systems via virtual machines. I also use <a href='https://github.com/rolinmb'>GitHub</a> to host some
									of my personal coding projects and work from internships. Other devices I am familiar with includes FPGA development using Intel Quartus Prime and Arduino controllers. 
								</li>
							</ul>
						</li>		
						<li>
							<u>Coursework</u>
							<br />
							<ul>
								<li>
									<b>Computer Science/Software Engineering:</b> Object-Oriented Programming, Data Structures, Algorithms & Analysis, Software Development Paradigms & User Interfaces<br />
								</li>
								<li>
									<b>Mathematics:</b> Calculus (Single & Multivariate), Differential Equations, Linear Algebra, Statistics, Numerical Analysis for Differential Equations
								</li>
							</ul>
						</li>
					</ul>
				</p>
			</div>
		);
	}
}
