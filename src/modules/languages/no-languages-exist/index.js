import React from 'react';
import Button from '../../../components/button';
import styles from './styles.module.scss';

const NoLanguagesExist = () => {
  return (
    <>
      <div className={styles.title}>{'it is a good time to start learning some language'}</div>
      <Button text={'add new language'} />
    </>
  );
};

export default NoLanguagesExist;
