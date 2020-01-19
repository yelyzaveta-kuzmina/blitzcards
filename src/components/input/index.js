import React from 'react';
import styles from './styles.module.scss';

const Input = ({ title, placeholder, onChange }) => {
  return (
    <label className={styles.inputWrapper}>
      <span className={styles.title}>{title}</span>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} />
    </label>
  );
};

export default Input;
