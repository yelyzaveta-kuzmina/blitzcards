import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameProvider from '../../state';
import StartPage from '../start-page';
import DisplayBox from '../../components/display-box';
import ColorPicker from '../color-picker';
import styles from './styles.module.scss';

const INITIAL_BACKGROUND_COLOR = '#5d5abf';

const onBackgroundColorChange = (color) => {
  document.documentElement.style.setProperty('--background-color', color);
};

onBackgroundColorChange(INITIAL_BACKGROUND_COLOR);

const Application = () => {
  return (
    <GameProvider>
      <ColorPicker
        className={styles.colorPicker}
        initialColor={INITIAL_BACKGROUND_COLOR}
        onChange={onBackgroundColorChange}
      />
      <DisplayBox>
        <Switch>
          <Route path="/" exact component={StartPage} />
        </Switch>
      </DisplayBox>
    </GameProvider>
  );
};

export default Application;
