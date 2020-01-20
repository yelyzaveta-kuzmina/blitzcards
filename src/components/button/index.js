import React from 'react';
import ClassName from 'classnames';
import styles from './styles.module.scss';

const Button = ({ text, className, onClick }) => {
  return (
    <button className={ClassName(className, styles.button)} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
