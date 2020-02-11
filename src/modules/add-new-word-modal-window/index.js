import React, { useCallback } from 'react';
import { useWords } from '../words/state';
import Input from '../../components/input';
import Button from '../../components/button';
import useNewWordModalWindow from './state';
import styles from './styles.module.scss';

const AddNewWordModalWindow = ({ onClose, category }) => {
  const { wordInputValues, inputHandleChange } = useNewWordModalWindow(category);
  const { onWordAdd } = useWords();

  const onSubmit = useCallback(() => {
    onWordAdd(wordInputValues);
    onClose();
  }, [wordInputValues, onClose, onWordAdd]);

  return (
    <div className={styles.blockWrapper}>
      <div className={styles.closeButton} onClick={onClose}>
        &times;
      </div>
      <div className={styles.inputsWrapper}>
        <Input
          placeholder={'What is the word you want to learn?'}
          name={'targetWord'}
          onChange={inputHandleChange}
        />
        <Input
          placeholder={'What is the translation of the word?'}
          name={'sourceWord'}
          onChange={inputHandleChange}
        />
      </div>
      <Button text={'submit'} className={styles.button} onClick={onSubmit} />
    </div>
  );
};

export default AddNewWordModalWindow;
