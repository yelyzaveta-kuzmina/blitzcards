import React from 'react';
import styles from './styles.module.scss';

const Timer = ({ time }) => {
  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timer}>{time}</div>
    </div>
  );
};

export default Timer;
