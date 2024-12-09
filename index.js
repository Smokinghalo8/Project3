import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


//either this or app.js is needed, but errors and making me want to include both...


//this line is 'broken' but the website still works regardless, including if I change it.
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);