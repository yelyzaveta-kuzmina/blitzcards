import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.scss';

const AddNewLanguageModalWindow = () => {
  return (
    <div className={styles.wrapper}>
      <Input placeholder={'Which language do you want to learn?'} title={'To'} onChange={null} />
      <Input placeholder={'What will be the source language?'} title={'From'} onChange={null} />
      {/* <div>
        <span>What language do you want to learn?</span>
        <input />
      </div>
      <div>
        <span>What will be the source language?</span>
        <input />
      </div> */}
    </div>
  );
};

export default AddNewLanguageModalWindow;
