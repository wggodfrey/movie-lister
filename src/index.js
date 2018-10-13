//framework
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store.js';
import {Provider} from 'react-redux';
//components
import App from './components/App.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
