import React from 'react';
import { useAppState } from '../../state';
import NoLanguagesExist from './no-languages-exist';
import styles from './styles.module.scss';

const Languages = () => {
  const { languages } = useAppState();

  if (!languages) {
    return (
      <span className={styles.languagesWrapper}>
        <NoLanguagesExist />
      </span>
    );
  }
  return null;
};

export default Languages;
