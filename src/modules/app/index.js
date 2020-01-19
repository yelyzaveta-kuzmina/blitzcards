import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DisplayBox from '../../components/display-box';
import StartPage from '../start-page';
import StartPageButton from '../../components/start-page-button';
import SettingsWindow from '../settings-window';
import Languages from '../languages';
import styles from './styles.module.scss';

const Application = () => {
  return (
    <>
      <DisplayBox>
        <StartPageButton className={styles.startPageButton} to="/" />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/languages" component={Languages} />
          <Route path="/settings" component={SettingsWindow} />
          <Route path="/new-category" component={null} />
        </Switch>
      </DisplayBox>
    </>
  );
};

export default Application;
