import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DisplayBox from '../../components/display-box';
import StartPage from '../start-page';
import StartPageButton from '../../components/start-page-button';
import SettingsWindow from '../settings-window';
import Categories from '../categories';
import styles from './styles.module.scss';

const Application = () => {
  return (
    <>
      <DisplayBox>
        <StartPageButton className={styles.startPageButton} />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/categories" component={Categories} />
          <Route path="/settings" component={SettingsWindow} />
          <Route path="/new-category" component={null} />
        </Switch>
      </DisplayBox>
    </>
  );
};

export default Application;
