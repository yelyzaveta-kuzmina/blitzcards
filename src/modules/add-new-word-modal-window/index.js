import React, { useCallback } from 'react';
import { useWords } from '../../state/words';
import Input from '../../components/input';
import Button from '../../components/button';
import CloseButton from '../../components/close-button';
import useNewWordModalWindow from './state';
import styles from './styles.module.scss';

const AddNewWordModalWindow = ({ onClose, categoryId }) => {
  const { wordInputValues, inputHandleChange } = useNewWordModalWindow({ categoryId });
  const { onWordAdd } = useWords();

  const onSubmit = useCallback(() => {
    onWordAdd(wordInputValues);
    onClose();
  }, [wordInputValues, onClose, onWordAdd]);

  return (
    <div className={styles.blockWrapper}>
      <CloseButton className={styles.closeButton} onClick={onClose} />
      <div className={styles.inputsWrapper}>
        <Input
          placeholder={'Which word you would like to learn?'}
          name={'word'}
          maxLength={30}
          onChange={inputHandleChange}
        />
        <Input
          placeholder={'What is the translation of the word?'}
          name={'translation'}
          maxLength={30}
          onChange={inputHandleChange}
        />
      </div>
      <Button text={'submit'} className={styles.button} onClick={onSubmit} />
    </div>
  );
};

export default AddNewWordModalWindow;
