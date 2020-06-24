import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styles from './styles.module.scss';

const KeyCodes = {
  BACKSPACE: 8
};

const onFocusNextInput = (element) => {
  const nextInput = document.querySelector('input:focus ~ input');
  if (nextInput) {
    nextInput.focus();
  }
};

const onFocusPreviousInput = (element) => {
  const inputs = Array.from(element.parentElement.querySelectorAll('input'));
  const currentInputIndex = inputs.findIndex((input) => input === element);
  const previousInput = inputs[currentInputIndex - 1];
  if (previousInput) {
    previousInput.focus();
  }
};

const moveCaretToInput = (caret, element) => {
  const { x, width } = element.getBoundingClientRect();
  const { x: parentX } = element.parentElement.getBoundingClientRect();
  const caretX = x - parentX + 2; // + width / 2;
  caret.style.left = `${caretX}px`;
};

const TranslationInput = ({ wordMask, onChange }) => {
  const [value, setValue] = useState(wordMask);
  const caretRef = useRef();

  const updateValueAtIndex = (char, index) =>
    setValue((value) => value.slice(0, index) + char + value.slice(index + 1));

  const clearValueAtIndex = (index) => updateValueAtIndex('*', index);

  useLayoutEffect(() => {
    moveCaretToInput(caretRef.current, document.querySelector('input:focus'));
  }, []);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className={styles.wrapper}>
      <div ref={caretRef} className={styles.caret}>
        ♥
      </div>
      {Array.from(wordMask, (symbol, index) => {
        if (symbol === '*') {
          const inputValue = value[index] === '*' ? '' : value[index];
          return (
            <input
              className={styles.cell}
              value={inputValue}
              autoFocus={index === 0}
              onFocus={(event) => {
                console.log(event.target);
                moveCaretToInput(caretRef.current, event.target);
              }}
              onKeyPress={(event) => {
                const char = String.fromCharCode(event.charCode);
                updateValueAtIndex(char, index);
                onFocusNextInput(event.target);
              }}
              onKeyUp={(event) => {
                if (event.which === KeyCodes.BACKSPACE) {
                  clearValueAtIndex(index);
                  onFocusPreviousInput(event.target);
                }
              }}
            />
          );
        }

        return <span className={styles.cell}>{symbol}</span>;
      })}
    </div>
  );
};

export default TranslationInput;
