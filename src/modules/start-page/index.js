import React from 'react';
import { TitleText, SubtitleText, CategoriesButtonText } from './constants';
import StartPageButton from '../../components/start-page-button';
import MottoBox from './components/motto-box';
import CategoriesButton from '../../components/button';
import styles from './styles.module.scss';

const StartPage = () => {
  return (
    <>
      <StartPageButton />
      <div className={styles.content}>
        <MottoBox title={TitleText} subtitle={SubtitleText} />
        <CategoriesButton text={CategoriesButtonText} path="./categories" />
      </div>
    </>
  );
};

export default StartPage;
