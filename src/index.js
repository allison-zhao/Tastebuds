import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
