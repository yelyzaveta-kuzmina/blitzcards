import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ToPreviousPageButton from '../../../components/to-previous-page-button';
import Fireworks from './fireworks';
import RetryGame from '../../../assets/images/retry.png';
import styles from './styles.module.scss';

const GameFinished = ({ points, time }) => {
  const { sourceLanguage, targetLanguage } = useRouteMatch().params;

  return (
    <>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}`}
      />
      <div className={styles.wrapper}>
        <Fireworks />
        <div className={styles.title}>Congratulations! </div>
        <div className={styles.results}>
          Your results: points – {points}, time - {time}
        </div>
        <img src={RetryGame} alt="Retry" className={styles.retryIcon} />
      </div>
    </>
  );
};

export default GameFinished;
