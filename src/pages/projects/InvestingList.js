import React, { Component } from 'react';

export class InvestingList extends Component{
	render(){
		return(
			<li>
				<u>Investing</u>
				<ul>
					<li>
						<i>Stock, foreign-exchange and cryptocurrency charting
						using <a href="https://alphavantage.com">AlphaVantage's</a>&nbsp;API:</i>
						<ul>
							<li>Language: Python</li>
							<li>Dependencies: alpha_vantage, Matplotlib, Pandas</li>
							<li>Source code <a href="https://github.com/rolinmb/investing">here</a></li>
						</ul>
					</li>
					<li>
						<i>Stock paper-trading bot with&nbsp;
						<a href="https://alpaca.markets">Alpaca's</a>&nbsp;API:</i>
						<ul>
							<li>Coming soon!</li>
						</ul>
					</li>
				</ul>
			</li>
		);
	}
}