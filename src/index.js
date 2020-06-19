import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
	<div id="page-wrap">
		<div id="header-wrap">
			<div class="header-content">
				<p class="header-name">Rolin Blake</p>
			</div>
		</div>
		<App />
		<div id="footer-wrap">
			<div id='footer-content'>
				<p id="footer-links">Links:
					&nbsp;&nbsp;<a href="https://github.com/rolinmb">GitHub</a>
					/<a href="https://github.com/rolinmb/fbase-react"> Site Source Code</a>
					-&nbsp;&nbsp;<a href="https://linkedin.com/in/rolin-blake">LinkedIn</a>
				</p>
			</div>
		</div>
	</div>
  </React.StrictMode>,
  document.getElementById('index')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
