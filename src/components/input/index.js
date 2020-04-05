import React from 'react';
import styles from './styles.module.scss';

const Input = ({ placeholder, name, onChange }) => {
  return (
    <label htmlFor={name} className={styles.inputWrapper}>
      <input className={styles.input} placeholder={placeholder} name={name} onChange={onChange} />
    </label>
  );
};

export default Input;
