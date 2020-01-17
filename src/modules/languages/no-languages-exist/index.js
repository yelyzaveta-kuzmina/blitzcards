import React from 'react';
import { addLanguageButtonText, noLanguagesExistTitle } from '../constants';
import Button from '../../../components/button';
import styles from './styles.module.scss';

const NoLanguagesExist = () => {
  return (
    <>
      <div className={styles.title}>{noLanguagesExistTitle}</div>
      <Button text={addLanguageButtonText} />
    </>
  );
};

export default NoLanguagesExist;
