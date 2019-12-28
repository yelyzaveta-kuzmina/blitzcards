import React from 'react';
import StartPageButton from '../../components/start-page-button';
import styles from './styles.module.scss';

const StartPage = () => {
  return (
    <>
      <StartPageButton />
      <div className={styles.startPageWrapper} />
    </>
  );
};

export default StartPage;
