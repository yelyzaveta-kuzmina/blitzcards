import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameProvider from '../../state';
import StartPage from '../start-page';
import DisplayBox from '../../components/display-box';

const Application = () => {
  return (
    <GameProvider>
      <DisplayBox>
        <Switch>
          <Route path="/" exact component={StartPage} />
        </Switch>
      </DisplayBox>
    </GameProvider>
  );
};

export default Application;
