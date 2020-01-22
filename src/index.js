import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStateProvider from './state';
import ThemeProvider from './state/theming';
import LanguagesProvider from './state/languages';
import App from './modules/app';
import './index.scss';

ReactDOM.render(
  <Router basename="/blitzcards">
    <ThemeProvider>
      <LanguagesProvider>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </LanguagesProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
