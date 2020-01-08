import React from 'react';
import styles from './styles.module.scss';
import { NavLink as Link } from 'react-router-dom';

const Button = ({ path, text, onClick }) => {
  return (
    <Link exact to={path}>
      <button className={styles.button} onClick={onClick}>
        <span className={styles.text}>{text}</span>
      </button>
    </Link>
  );
};

export default Button;
