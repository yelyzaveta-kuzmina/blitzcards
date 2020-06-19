import React, { useState, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useLanguages } from '../../state/languages';
import { useCategories } from '../../state/categories';
import { useWords } from '../../state/words';
import Timer from '../timer';
import PlayingCard from './playing-card';
import InputMask from 'react-input-mask';
import ToNextStepButton from '../../components/to-next-step-button';
import styles from './styles.module.scss';

const useWordPairs = () => {
  const { languages } = useLanguages();
  const { categories } = useCategories();
  const { words } = useWords();
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const selectedLanguage = languages.find((language) => {
    return language.sourceLanguage === sourceLanguage && language.targetLanguage === targetLanguage;
  });
  const selectedCategory = categories.find((category) => {
    return category.name === categoryName && category.languageId === selectedLanguage.id;
  });
  const filteredWords = words.filter((word) => word.categoryId === selectedCategory.id);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const word = filteredWords[currentWordIndex];

  const next = useCallback(() => {
    if (currentWordIndex < filteredWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      return;
    }
    setIsGameFinished(true);
  }, [currentWordIndex, filteredWords]);

  // const check = useCallback(
  //   (userWord) => {
  //     if (userWord === word) {
  //       //       setPoints(points => points + 1);
  //     }
  //   },
  //   [word, next]
  // );
  return { word, isGameFinished, next };
};

const NewGame = () => {
  const { word, isGameFinished, next } = useWordPairs();
  const [inputValue, setInputValue] = useState('');

  if (isGameFinished) {
    return 'Game finished!';
  }

  const mask = '* '.repeat(word.translation.length);

  return (
    <div className={styles.gameWindowWrapper}>
      <div className={styles.timerWrapper}>
        <div>It is not completed timer, no worries, it will look better</div>
        <Timer />
      </div>
      <div className={styles.playArea}>
        <PlayingCard className={styles.wordToTranslate}>{word.word}</PlayingCard>
        <PlayingCard>
          <InputMask
            autoFocus
            className={styles.wordTranslationInputWrapper}
            mask={mask}
            value={inputValue}
            placeholder="[Translation]"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </PlayingCard>
      </div>
      <ToNextStepButton className={styles.next} onClick={next} />
    </div>
  );
};

export default NewGame;
