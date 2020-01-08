import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import lightningImg from './lightning.svg';
import styles from './styles.module.scss';

const StartPageButton = ({ onClick }) => {
  return (
    <Link exact to="/">
      <img src={lightningImg} alt="lightning" className={styles.lightning} onClick={onClick} />
    </Link>
  );
};

export default StartPageButton;
