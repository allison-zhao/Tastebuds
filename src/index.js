import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import FacebookLogin from './Login';

render(
    <Router>
      <FacebookLogin />
    </Router>,
  document.getElementById('root')
);
