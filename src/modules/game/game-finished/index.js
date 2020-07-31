import React from 'react';
import Fireworks from './fireworks';
import styles from './styles.module.scss';

const GameFinished = ({ points }) => {
  return (
    <div className={styles.wrapper}>
      <Fireworks />
      {points}
    </div>
  );
};

export default GameFinished;
