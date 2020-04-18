import React from 'react';
import CloseButton from '../../components/close-button';
import styles from './styles.module.scss';

const AlertBox = ({ text, onModalClose }) => {
  return (
    <div className={styles.alertBoxWrapper}>
      <CloseButton className={styles.closeButton} onCLick={onModalClose} />
      <div className={styles.text}>{text}</div>
      <div className={styles.buttons}>
        <button className={styles.button}>Yes</button>
        <button className={styles.button}>No</button>
      </div>
    </div>
  );
};

export default AlertBox;
