import React from 'react';
import styles from './styles.module.scss';

const Input = ({ placeholder, onChange }) => {
  return (
    <label className={styles.inputWrapper}>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} />
    </label>
  );
};

export default Input;
