import React from 'react';
import styles from './styles.module.scss';

const MottoBox = ({ title, subtitle }) => {
  return (
    <div className={styles.mottoBox}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default MottoBox;
