import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import { createStore } from 'redux';
import store from './redux/store';

import './scss/app.scss';

import App from './App';

const inc = () => {
  store.dispatch({
    type: 'ДОБАВИТЬ',
  });
};

store.subscribe(() => {
  console.log('ИЗМЕНИЛСА', store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <button onClick={inc}>+1</button>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
