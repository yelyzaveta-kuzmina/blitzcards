import React from 'react';
import { useAppState } from '../../state';
import NoCategoriesExist from './no-categories-exist';
import styles from './styles.module.scss';

const Categories = () => {
  const { categories } = useAppState();

  if (!categories) {
    return (
      <span className={styles.categoriesWrapper}>
        <NoCategoriesExist />
      </span>
    );
  }
  return null;
};

export default Categories;
