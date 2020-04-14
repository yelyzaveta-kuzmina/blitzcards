import React from 'react';
import styles from './styles.module.scss';

const AlertBox = ({ text }) => {
  return (
    <div className={styles.alertBoxWrapper}>
      <div className={styles.text}>{text}</div>
      <div className={styles.buttons}>
        <button className={styles.button}>Yes</button>
        <button className={styles.button}>No</button>
      </div>
    </div>
  );
};

export default AlertBox;
