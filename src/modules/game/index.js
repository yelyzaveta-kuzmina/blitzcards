import React, { useState } from 'react';
import { useGame } from './state';
import Timer from '../timer';
import PlayingCard from './playing-card';
import TranslationInput from '../../components/translation-input';
import ToNextStepButton from '../../components/to-next-step-button';
import GameFinished from './game-finished';
import styles from './styles.module.scss';

const NewGame = () => {
  const [inputValue, setInputValue] = useState('');
  const { filteredWords, currentWordIndex, word, isGameFinished, check, points, timer } = useGame();

  if (isGameFinished) {
    return <GameFinished points={points} time={timer} />;
  }

  const handleNextStep = (inputValue) => {
    check(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.gameWindowWrapper}>
      <Timer value={timer} />
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
