import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import DisplayBox from '../../components/display-box';
import StartPageButton from '../../components/start-page-button';
import styles from './styles.module.scss';

const StartPageAsync = lazy(() => import('../start-page'));
const LanguagesAsync = lazy(() => import('../languages'));
const SettingsWindowAsync = lazy(() => import('../settings-window'));

const Language = ({ match }) => <div>selected language: {match.params.language}</div>;

const Application = () => {
  return (
    <DisplayBox>
      <StartPageButton className={styles.startPageButton} to="/" />
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/" exact component={StartPageAsync} />
          <Route path="/languages" component={LanguagesAsync} />
          <Route path="/language/:language" component={Language} />
          <Route path="/settings" component={SettingsWindowAsync} />
        </Switch>
      </Suspense>
    </DisplayBox>
  );
};

export default Application;
