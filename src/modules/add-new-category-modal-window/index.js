import React, { useCallback } from 'react';
import { useCategories } from '../categories/state';
import Input from '../../components/input';
import Button from '../../components/button';
import useNewCategoryModalWindow from './state';
import styles from './styles.module.scss';

const AddNewCategoryModalWindow = ({ onClose, language }) => {
  const { categoryInputValue, inputHandleChange } = useNewCategoryModalWindow(language);
  const { onCategoryAdd } = useCategories();

  const onSubmit = useCallback(() => {
    onCategoryAdd(categoryInputValue);
    onClose();
  }, [categoryInputValue, onClose, onCategoryAdd]);

  return (
    <div className={styles.blockWrapper}>
      <div className={styles.closeButton} onClick={onClose}>
        &times;
      </div>
      <div className={styles.inputsWrapper}>
        <Input
          placeholder={'Name of the category'}
          name={'categoryName'}
          onChange={inputHandleChange}
        />
      </div>
      <Button text={'submit'} className={styles.button} onClick={onSubmit} />
    </div>
  );
};

export default AddNewCategoryModalWindow;
