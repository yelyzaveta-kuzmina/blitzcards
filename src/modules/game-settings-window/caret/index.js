import React from 'react';
import { useAppState } from '../../../state';
import { caretOptions } from '../../../utils/carets';
import CaretOptionsWrapper from '../caret-options-wrapper';
import styles from './styles.module.scss';

const CaretSetting = () => {
  const { caretIndex, setSubmittedCaret, submittedCaret } = useAppState();

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
          onCaretSubmit={onCaretSubmit}
        />
      </div>
    </>
  );
};

export default CaretSetting;
