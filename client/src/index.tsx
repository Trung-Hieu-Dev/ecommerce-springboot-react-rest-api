import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './layout/App';
import reportWebVitals from './reportWebVitals';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// get error if exist
axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: AxiosError) => {
		console.log('interceptor run...');
		return Promise.reject(error); // throw error
	}
);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
