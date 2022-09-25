import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);
//ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));

root.render(
  <h1>Hello world</h1>
);

//The following code will render a JSX expression:
// ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

//One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
//This is significant! Only updating the necessary DOM elements is a large part of what makes React so successful.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
