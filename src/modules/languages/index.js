import React from 'react';
import { useAppState } from '../../state';
import NoLanguagesExist from './no-languages-exist';
// import styles from './styles.module.scss';

const Languages = () => {
  const { languages } = useAppState();

  if (!languages) {
    return (
      // <div className={styles.languagesWrapper}>
      <NoLanguagesExist />
      // </div>
    );
  }
  return;
};

export default Languages;
