import React from 'react';
import Button from '../button';
import styles from './styles.module.scss';

const NoItemsExist = ({ title, buttonText, onClick }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <Button text={buttonText} className={styles.button} onClick={onClick} />
    </>
  );
};

export default NoItemsExist;
