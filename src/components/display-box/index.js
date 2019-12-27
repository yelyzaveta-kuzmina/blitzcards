import React from 'react';
import styles from './styles.module.scss';

const DisplayBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default DisplayBox;
