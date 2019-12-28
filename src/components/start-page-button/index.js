import React from 'react';
import lightningImg from './lightning.svg';
import styles from './styles.module.scss';

const StartPageButton = ({ onClick }) => {
  return <img src={lightningImg} alt="lightning" className={styles.lightning} onClick={onClick} />;
};

export default StartPageButton;
