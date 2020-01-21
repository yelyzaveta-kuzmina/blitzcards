import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import useNewLanguageModalWindow from './state';
import useLanguages from '../../state/languages';
import styles from './styles.module.scss';

const AddNewLanguageModalWindow = ({ setNewLanguageModalOpen }) => {
  const { inputValue, inputHandleChange } = useNewLanguageModalWindow();
  const { onLanguageAdd } = useLanguages();

  return (
    <div className={styles.blockWrapper}>
      <div className={styles.closeButton} onClick={() => setNewLanguageModalOpen(false)}>
        &times;
      </div>
      <div className={styles.inputsWrapper}>
        <Input
          placeholder={'Which language do you want to learn?'}
          name={'targetLanguage'}
          onChange={(event) => inputHandleChange(event)}
        />
        <Input
          placeholder={'What will be the source language?'}
          name={'sourceLanguage'}
          onChange={(event) => inputHandleChange(event)}
        />
      </div>
      <Button text={'submit'} className={styles.button} onClick={() => onLanguageAdd(inputValue)} />
    </div>
  );
};

export default AddNewLanguageModalWindow;
