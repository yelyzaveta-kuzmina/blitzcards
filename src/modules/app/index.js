import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTheming } from '../../state/theming';
import DisplayBox from '../../components/display-box';
import StartPage from '../start-page';
import ColorPicker from '../../components/color-picker';
import styles from './styles.module.scss';

const Application = () => {
  const { backgroundColor, setBackgroundColor } = useTheming();
  return (
    <>
      <ColorPicker
        className={styles.colorPicker}
        color={backgroundColor}
        onChange={({ hex }) => setBackgroundColor(hex)}
      />
      <DisplayBox>
        <Switch>
          <Route path="/" exact component={StartPage} />
        </Switch>
      </DisplayBox>
    </>
  );
};

export default Application;
