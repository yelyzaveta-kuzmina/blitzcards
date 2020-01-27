import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStateProvider from './state';
import ThemeProvider from './state/theming';
import LanguagesProvider from './modules/languages/state';
import CategoriesProvider from './modules/categories/state';
import App from './modules/app';
import './index.scss';
import 'normalize.css';

ReactDOM.render(
  <Router basename="/blitzcards" hashType="noslash">
    <ThemeProvider>
      <LanguagesProvider>
        <CategoriesProvider>
          <AppStateProvider>
            <App />
          </AppStateProvider>
        </CategoriesProvider>
      </LanguagesProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
