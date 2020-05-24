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
const GameSettingsWindowAsync = lazy(() => import('../game-settings-window'));
const NewGame = lazy(() => import('../game'));

const Application = () => {
  return (
    <DisplayBox>
      <StartPageButton className={styles.startPageButton} to="/" />
      <Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Route path="/" exact component={StartPageAsync} />
          <Route path="/languages" component={LanguagesAsync} />
          <Route
            path="/:sourceLanguage-:targetLanguage/:category/game-settings"
            component={GameSettingsWindowAsync}
          />
          <Route path="/:sourceLanguage-:targetLanguage/:category/game" component={NewGame} />
          <Route
            path="/:sourceLanguage-:targetLanguage/:category"
            component={SelectedCategoryAsync}
          />
          <Route path="/:sourceLanguage-:targetLanguage" component={SelectedLanguageAsync} />
          <Route path="/settings" component={SettingsWindowAsync} />
        </Switch>
      </Suspense>
    </DisplayBox>
  );
};

export default Application;
