import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
	<div id="page-wrap">
		<Header />
		<App />
		<Footer />
	</div>
  </React.StrictMode>,
  document.getElementById('index')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
