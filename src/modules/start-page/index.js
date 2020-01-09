import React from 'react';
import { useTheming } from '../../state/theming';
import { TitleText, SubtitleText, CategoriesButtonText } from './constants';
import MottoBox from './components/motto-box';
import CategoriesButton from '../../components/button';
import styles from './styles.module.scss';
import ColorPicker from '../../components/color-picker';

const StartPage = () => {
  const { backgroundColor, setBackgroundColor } = useTheming();

  return (
    <>
      <ColorPicker
        className={styles.colorPicker}
        color={backgroundColor}
        onChange={({ hex }) => setBackgroundColor(hex)}
      />
      <div className={styles.content}>
        <MottoBox title={TitleText} subtitle={SubtitleText} />
        <CategoriesButton text={CategoriesButtonText} path="./categories" />
      </div>
    </>
  );
};

export default StartPage;
