import React from 'react';
import Button from '../../../../components/button';
import styles from './styles.module.scss';

const AddNewLanguageButton = ({ onClick }) => {
  return <Button text={'add new language'} className={styles.button} onClick={onClick} />;
};

export default AddNewLanguageButton;
