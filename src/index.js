import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <Router hashType="noslash">
    <App />
  </Router>,
  document.getElementById('root')
);
