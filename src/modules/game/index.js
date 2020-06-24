import React, { useState } from 'react';
import { useGame } from './state';
import Timer from '../timer';
import PlayingCard from './playing-card';
import ToNextStepButton from '../../components/to-next-step-button';
import styles from './styles.module.scss';
import TranslationInput from '../../components/translation-input';

const NewGame = () => {
  const [inputValue, setInputValue] = useState('');
  const { word, isGameFinished, check, points } = useGame();

  if (isGameFinished) {
    return 'Game finished!';
  }

  const mask = word.translation.replace(/\w/g, '*');

  return (
    <div className={styles.gameWindowWrapper}>
      <div className={styles.timerWrapper}>
        <Timer />
        {points}
      </div>
      <div className={styles.playArea}>
        <PlayingCard className={styles.wordToTranslate}>{word.word}</PlayingCard>
        <PlayingCard>
          {/* <MaskedInput maskWord value={inputValue} onChange={(event) => setInputValue(event.target.value)} /> */}
          {/* <input
            autoFocus
            className={styles.wordTranslationInputWrapper}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          /> */}
          <TranslationInput wordMask={mask} onChange={setInputValue} />
        </PlayingCard>
      </div>
      <ToNextStepButton
        className={styles.next}
        onClick={() => {
          check(inputValue);
          setInputValue('');
        }}
      />
    </div>
  );
};

export default NewGame;
