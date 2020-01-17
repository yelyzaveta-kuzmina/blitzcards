import React from 'react';
import styles from './styles.module.scss';

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
