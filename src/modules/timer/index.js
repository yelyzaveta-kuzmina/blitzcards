import React from 'react';
import { formatTime } from '../../utils/formatting';
import styles from './styles.module.scss';

const Timer = ({ value }) => {
  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timer}>{formatTime(value)}</div>
    </div>
  );
};

export default Timer;
