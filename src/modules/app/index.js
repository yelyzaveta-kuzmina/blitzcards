import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DisplayBox from '../../components/display-box';
import StartPage from '../start-page';
import Categories from '../categories';
import StartPageButton from '../../components/start-page-button';
import styles from './styles.module.scss';

const Application = () => {
  return (
    <>
      <DisplayBox>
        <StartPageButton className={styles.startPageButton} />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/categories" component={Categories} />
          <Route path="/new-category" component={null} />
        </Switch>
      </DisplayBox>
    </>
  );
};

export default Application;
