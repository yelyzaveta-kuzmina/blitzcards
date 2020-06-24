import React, { useState, useEffect } from 'react';
import { formatTime } from '../../utils/formatting';
import styles from './styles.module.scss';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div className={styles.timer}>{formatTime(seconds)}</div>;
};

export default Timer;
