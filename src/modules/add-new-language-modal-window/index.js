import React, { useCallback } from 'react';
import { useLanguages } from '../languages/state';
import Input from '../../components/input';
import Button from '../../components/button';
import useNewLanguageModalWindow from './state';
import styles from './styles.module.scss';

const AddNewLanguageModalWindow = ({ onClose }) => {
  const { languageInputValues, inputHandleChange } = useNewLanguageModalWindow();
  const { onLanguageAdd } = useLanguages();

  const onSubmit = useCallback(() => {
    onLanguageAdd(languageInputValues);
    onClose();
  }, [languageInputValues, onClose, onLanguageAdd]);

  return (
    <div className={styles.blockWrapper}>
      <div className={styles.closeButton} onClick={onClose}>
        &times;
      </div>
      <div className={styles.inputsWrapper}>
        <Input
          placeholder={'Which language do you want to learn?'}
          name={'targetLanguage'}
          onChange={inputHandleChange}
        />
        <Input
          placeholder={'What will be the source language?'}
          name={'sourceLanguage'}
          onChange={inputHandleChange}
        />
      </div>
      <Button text={'submit'} className={styles.button} onClick={onSubmit} />
    </div>
  );
};

export default AddNewLanguageModalWindow;
