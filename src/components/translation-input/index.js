import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styles from './styles.module.scss';

const KeyCodes = {
  BACKSPACE: 8,
  DELETE: 46,
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37
};

const onFocusNextInput = (element) => {
  const inputs = Array.from(element.parentElement.querySelectorAll('input'));
  const currentInputIndex = inputs.findIndex((input) => input === element);
  const nextInput = inputs[currentInputIndex + 1];
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
  if (!caret || !element) {
    return;
  }
  const { x, width } = element.getBoundingClientRect();
  const { x: parentX } = element.parentElement.getBoundingClientRect();
  const caretX = x - parentX + 2; // + width / 2;
  caret.style.transform = `translateX(${caretX}px)`;
};

const TranslationInput = ({ word, onChange }) => {
  const [wordMask, setMask] = useState('');
  const [value, setValue] = useState('');
  const caretRef = useRef();

  useEffect(() => {
    const mask = word.translation.replace(/\w/g, '*');
    const firstInput = caretRef.current.nextSibling;
    if (firstInput) {
      firstInput.focus();
    }
    setMask(mask);
    setValue(mask);
  }, [word]);

  const updateValueAtIndex = (char, index) =>
    setValue((value) => value.slice(0, index) + char + value.slice(index + 1));

  const clearValueAtIndex = (index) => updateValueAtIndex('*', index);

  useLayoutEffect(() => {
    moveCaretToInput(caretRef.current, document.querySelector('input:focus'));
  }, []);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  const handleKey = (inputElement, keyCode, inputIndex) => {
    if (keyCode === KeyCodes.BACKSPACE) {
      if (value[inputIndex] === '*' && inputIndex > 0) {
        clearValueAtIndex(inputIndex - 1);
      }
      clearValueAtIndex(inputIndex);
      onFocusPreviousInput(inputElement);
    }

    if (keyCode === KeyCodes.ARROW_RIGHT) {
      onFocusNextInput(inputElement);
    }

    if (keyCode === KeyCodes.ARROW_LEFT) {
      onFocusPreviousInput(inputElement);
    }
  };

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
              readOnly
              key={index}
              className={styles.cell}
              autoFocus={index === 0}
              value={inputValue}
              onFocus={(event) => {
                moveCaretToInput(caretRef.current, event.target);
              }}
              onKeyPress={(event) => {
                const char = String.fromCharCode(event.charCode);
                console.log(char, index);
                updateValueAtIndex(char, index);
                onFocusNextInput(event.target);
              }}
              onKeyUp={(event) => handleKey(event.target, event.which, index)}
            />
          );
        }

        return (
          <span key={index} className={styles.cell}>
            {symbol}
          </span>
        );
      })}
    </div>
  );
};

export default TranslationInput;
