import React, { Component } from 'react';

export class WebscrapingList extends Component{
	render(){
		return(
			<li>
				<u>Web-Scraping</u>
				<ul>
					<li>
						<i>Fetching stock, foreign-exchange and cryptocurrency quotes
						from <a href="https://marketwatch.com">marketwatch.com</a>:</i>
						<ul>
							<li>Language: Python</li>
							<li>Dependencies: BeautifulSoup</li>
							<li>Source code <a href="https://github.com/rolinmb/investing">here</a></li>
						</ul>
					</li>
					<li>
						<i>NDC Code data from <a href="https://ndclist.com">ndclist.com</a>:</i>
						<ul>
							<li>Languages: Python, JavaScript, HTML</li>
							<li>
								Dependencies: 
								<ul class="dependency-sublist">
									<li>Python - BeautifulSoup, Pandas</li>
									<li>Javascript - Node.js, axios.js, cheerio.js, express.js, xlsx(sheetJS)</li>
								</ul>
							</li>
							<li>
								Source code <a href="https://github.com/rolinmb/rs-inter">here</a></li>
						</ul>
					</li>			
				</ul>
			</li>
		);
	}
}