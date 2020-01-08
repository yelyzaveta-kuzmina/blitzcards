import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GameProvider from './state';
import ThemeProvider from './state/theming';
import App from './modules/app';
import './index.scss';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
