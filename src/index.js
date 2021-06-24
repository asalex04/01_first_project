import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
]
let messages = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How is your it-kamasutra?'},
    {id: 3, text: 'Yo'},
    {id: 4, text: 'Yo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
