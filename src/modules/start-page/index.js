import React from 'react';
import { TitleText, SubtitleText } from '../../constants';
import StartPageButton from '../../components/start-page-button';
import StartPageMottoBox from '../../components/start-page-motto-box';
import styles from './styles.module.scss';

const StartPage = () => {
  return (
    <>
      <StartPageButton />
      <StartPageMottoBox title={TitleText} subtitle={SubtitleText} />
      <div className={styles.startPageWrapper} />
    </>
  );
};

export default StartPage;
