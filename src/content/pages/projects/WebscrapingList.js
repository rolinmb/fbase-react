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
							<li>Created with Python</li>
							<li>Dependencies: <p class="sublist-content">BeautifulSoup</p></li>
							<li>Source code <a href="https://github.com/rolinmb/investing">here</a></li>
						</ul>
					</li>
					<li>
						<i>NDC Code data from <a href="https://ndclist.com">ndclist.com</a>:</i>
						<ul>
							<li>Written in Python and in JavaScript w/ HTML</li>
							<li>
								Dependencies: 
								<ul>
									<li><i>Python</i> - <p class="sublist-content">BeautifulSoup, Pandas</p></li>
									<li><i>JavaScript</i> - <p class="sublist-content">Node.js, axios.js, cheerio.js, express.js, xlsx(sheetJS)</p></li>
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