import React from 'react';
import styles from './styles.module.scss';

const Input = ({ placeholder, name, maxlength, onChange }) => {
  return (
    <label htmlFor={name} className={styles.inputWrapper}>
      <input
        className={styles.input}
        autocomplete="off"
        placeholder={placeholder}
        name={name}
        maxlength={maxlength}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
