import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStateProvider from './state';
import ThemeProvider from './state/theming';
import LanguagesProvider from './state/languages';
import CategoriesProvider from './state/categories';
import WordsProvider from './state/words';
import App from './modules/app';
import './index.scss';
import 'normalize.css';

ReactDOM.render(
  <Router basename="/blitzcards" hashType="noslash">
    <ThemeProvider>
      <LanguagesProvider>
        <CategoriesProvider>
          <WordsProvider>
            <AppStateProvider>
              <App />
            </AppStateProvider>
          </WordsProvider>
        </CategoriesProvider>
      </LanguagesProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
