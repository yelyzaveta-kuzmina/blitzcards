import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTheming } from '../../state/theming';
import DisplayBox from '../../components/display-box';
import StartPage from '../start-page';
import Categories from '../categories';
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
          <Route path="/categories" component={Categories} />
          <Route path="/new-category" component={null} />
        </Switch>
      </DisplayBox>
    </>
  );
};

export default Application;
