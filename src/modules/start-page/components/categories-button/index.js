import React from 'react';
import styles from './styles.module.scss';

const CategoriesButton = ({ text, onClick }) => {
  return (
    <button className={styles.categoriesButton} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default CategoriesButton;
