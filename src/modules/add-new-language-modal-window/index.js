import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.scss';

const AddNewLanguageModalWindow = ({ setNewLanguageModalOpen }) => {
  return (
    <div className={styles.wrapper}>
      <Input placeholder={'Which language do you want to learn?'} title={'To'} onChange={null} />
      <Input placeholder={'What will be the source language?'} title={'From'} onChange={null} />
      <div className={styles.closeButton} onClick={() => setNewLanguageModalOpen(false)}>
        &times;
      </div>
    </div>
  );
};

export default AddNewLanguageModalWindow;
