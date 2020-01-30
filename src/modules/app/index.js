import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingComponent from '../../components/suspense-loading';
import DisplayBox from '../../components/display-box';
import StartPageButton from '../../components/start-page-button';
import styles from './styles.module.scss';

const StartPageAsync = lazy(() => import('../start-page'));
const LanguagesAsync = lazy(() => import('../languages'));
const SelectedLanguageAsync = lazy(() => import('../selected-language'));
const SelectedCategoryAsync = lazy(() => import('../selected-category'));
const SettingsWindowAsync = lazy(() => import('../settings-window'));

const Application = () => {
  return (
    <DisplayBox>
      <StartPageButton className={styles.startPageButton} to="/" />
      <Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Route path="/" exact component={StartPageAsync} />
          <Route path="/languages" component={LanguagesAsync} />
          <Route path="/language/:language/:category" component={SelectedCategoryAsync} />
          <Route path="/language/:language" component={SelectedLanguageAsync} />
          <Route path="/settings" component={SettingsWindowAsync} />
        </Switch>
      </Suspense>
    </DisplayBox>
  );
};

export default Application;
