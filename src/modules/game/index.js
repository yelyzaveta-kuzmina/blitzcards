import React, { useState } from 'react';
import { useGame } from './state';
import Timer from '../timer';
import PlayingCard from './playing-card';
import ToNextStepButton from '../../components/to-next-step-button';
import styles from './styles.module.scss';
import TranslationInput from '../../components/translation-input';

const NewGame = () => {
  const [inputValue, setInputValue] = useState('');
  const { filteredWords, currentWordIndex, word, isGameFinished, check, points } = useGame();

  if (isGameFinished) {
    return 'Game finished!';
  }

  const handleNextStep = (inputValue) => {
    check(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.gameWindowWrapper}>
      <div className={styles.timerWrapper}>
        <Timer />
      </div>
      <div className={styles.resultsWrapper}>points: {points}</div>
      <div className={styles.playArea}>
        <PlayingCard className={styles.wordToTranslate}>{word.word}</PlayingCard>
        <PlayingCard>
          <TranslationInput word={word} onChange={setInputValue} />
        </PlayingCard>
      </div>
      <ToNextStepButton className={styles.next} onClick={() => handleNextStep(inputValue)} />
      <div className={styles.progress}>
        {currentWordIndex + 1}/{filteredWords.length}
      </div>
    </div>
  );
};

export default NewGame;
