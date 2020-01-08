import React from 'react';
import { createCategoryButtonText, noCategoriesExistTitle } from '../constants';
import NewCategoryButton from '../../../components/button';
import styles from './styles.module.scss';

const NoCategoriesExist = () => {
  return (
    <>
      <div className={styles.title}>{noCategoriesExistTitle}</div>
      <NewCategoryButton text={createCategoryButtonText} path="/new-category" />
    </>
  );
};

export default NoCategoriesExist;
