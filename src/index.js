import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.js';
import { Header } from './content/Header.js';
import { Footer } from './content/Footer.js';
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
// unregister() to register() below.
serviceWorker.unregister();
