import React from 'react';
import Button from '../../../components/button';
import { useAppState } from '../../../state';
import { caretOptions } from '../../../utils/carets';
import CaretOptionsWrapper from '../caret-options-wrapper';
import styles from './styles.module.scss';

const CaretSetting = () => {
  const { caretIndex, setCaretIndex, setSubmittedCaret, submittedCaret } = useAppState();

  const onCaretSelect = (index) => {
    setCaretIndex(index);
  };

  const onCaretSubmit = (caret) => {
    setSubmittedCaret(caret);
  };

  return (
    <>
      <div className={styles.settingDetail}>
        <CaretOptionsWrapper
          options={caretOptions}
          caretIndex={caretIndex}
          submittedCaret={submittedCaret}
          onCaretSelect={onCaretSelect}
        />
      </div>
      <Button
        text={'submit'}
        className={styles.button}
        onClick={() => onCaretSubmit(caretOptions[caretIndex])}
      />
    </>
  );
};

export default CaretSetting;
