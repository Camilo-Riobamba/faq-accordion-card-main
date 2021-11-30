import React from 'react';
import ReactDOM from 'react-dom';

// aplication
import App from './App';

// testing
import reportWebVitals from './reportWebVitals';

//styles
import './sass/main.scss';

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);