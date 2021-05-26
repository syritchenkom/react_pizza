import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './scss/app.scss';

import App from './App';

function counter(state = 0, action) {
  /* if(action.type === 'INCREMENT') {
        return state + 1;
    }
      if(action.type === 'DECREMENT'){
        return state - 1;
      }
      return state;
  }) */
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

//store.subscribe(() => console.log('хранилище изменилось', store.getState()));

console.log(store.getState()); // 0

store.dispatch({ type: 'INCREMENT' }); // 0 => 1
store.dispatch({ type: 'INCREMENT' }); // 1 => 2
store.dispatch({ type: 'DECREMENT' }); // 2 => 1

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
