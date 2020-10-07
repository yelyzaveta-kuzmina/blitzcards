import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const CaretOptionsWrapper = ({ options, caretIndex, submittedCaret, onCaretSelect }) => {
  console.log('zz', submittedCaret);
  console.log('ww', caretIndex);
  return (
    <div className={styles.caretsWrapper}>
      {options.map((option, index) => {
        const isSelected = caretIndex === index;
        const isSubmitted = submittedCaret === option;

        const classNameSubmitted = isSubmitted
          ? classNames(styles.caret, styles.submitted)
          : styles.caret;

        const classNameSelected = isSelected
          ? classNames(styles.caret, styles.selected)
          : styles.caret;

        return (
          <span
            key={index}
            className={isSubmitted ? classNameSubmitted : classNameSelected}
            onClick={() => onCaretSelect(index)}>
            {option}
          </span>
        );
      })}
    </div>
  );
};

export default CaretOptionsWrapper;
