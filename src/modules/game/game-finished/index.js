import React from 'react';
import Fireworks from './fireworks';
import styles from './styles.module.scss';

const GameFinished = ({ points, time }) => {
  return (
    <div className={styles.wrapper}>
      <Fireworks />
      Congratulations! You reached {points} points in {time}
    </div>
  );
};

export default GameFinished;
