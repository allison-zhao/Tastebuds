import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Login from './Login';

render(
    <Router>
      <Login />
    </Router>,
  document.getElementById('root')
);
