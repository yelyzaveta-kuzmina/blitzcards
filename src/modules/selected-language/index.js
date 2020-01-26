import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Button from '../../components/button';
import styles from './styles.module.scss';

const SelectedLanguage = () => {
  const { language } = useRouteMatch().params;
  return (
    <>
      <div className={styles.selectedLanguageHeader}>
        <div className={styles.selectedLanguageTitle}>{language}</div>
        <Button text={'add new category'} className={styles.button} onClick={null} />
      </div>
      <div className={styles.content} />
    </>
  );
};

export default SelectedLanguage;
