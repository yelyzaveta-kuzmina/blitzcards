import React from 'react';
// import { useTheming } from '../../state/theming';
import { TitleText, SubtitleText, CategoriesButtonText } from './constants';
// import ColorPicker from '../../components/color-picker';
import SettingsButton from './components/settings-button';
import MottoBox from './components/motto-box';
import CategoriesButton from '../../components/button';
import styles from './styles.module.scss';

const StartPage = () => {
  // const { backgroundColor, setBackgroundColor } = useTheming();

  return (
    <>
      {/* <ColorPicker
        className={styles.colorPicker}
        color={backgroundColor}
        onChange={({ hex }) => setBackgroundColor(hex)}
      /> */}

      <SettingsButton onClick={() => null} />
      <div className={styles.content}>
        <MottoBox title={TitleText} subtitle={SubtitleText} />
        <CategoriesButton text={CategoriesButtonText} path="./categories" />
      </div>
    </>
  );
};

export default StartPage;
