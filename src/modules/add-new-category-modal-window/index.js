import React, { useCallback } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import useNewCategoryModalWindow from './state';
import styles from './styles.module.scss';

const AddNewCategoryModalWindow = ({ onClose, languageId }) => {
  const {
    categoryInputValue,
    setCategoryInputValue,
    onCategorySubmit
  } = useNewCategoryModalWindow({ languageId });

  const onSubmit = useCallback(() => {
    onCategorySubmit();
    onClose();
  }, [onClose, onCategorySubmit]);

  const onCategoryNameChange = useCallback(
    (event) => {
      setCategoryInputValue(event.target.value);
    },
    [setCategoryInputValue]
  );

  return (
    <div className={styles.blockWrapper}>
      <div className={styles.closeButton} onClick={onClose}>
        &times;
      </div>
      <div className={styles.inputsWrapper}>
        <Input
          placeholder={'Name of the category'}
          name="name"
          value={categoryInputValue}
          onChange={onCategoryNameChange}
        />
      </div>
      <Button text={'submit'} className={styles.button} onClick={onSubmit} />
    </div>
  );
};

export default AddNewCategoryModalWindow;
