import { useState, useCallback, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useLanguages } from '../../state/languages';
import { useCategories } from '../../state/categories';
import { useWords } from '../../state/words';
import useTimer from '../../hooks/use-timer';

export const useGame = () => {
  const { languages } = useLanguages();
  const { categories } = useCategories();
  const { words } = useWords();
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const { value: timer, startTimer, stopTimer } = useTimer();

  const selectedLanguage = languages.find((language) => {
    return language.sourceLanguage === sourceLanguage && language.targetLanguage === targetLanguage;
  });

  const selectedCategory = categories.find((category) => {
    return category.name === categoryName && category.languageId === selectedLanguage.id;
  });
  const filteredWords = words.filter((word) => word.categoryId === selectedCategory.id);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const word = filteredWords[currentWordIndex];

  const next = useCallback(() => {
    if (currentWordIndex < filteredWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      return;
    }
    setIsGameFinished(true);
    stopTimer();
  }, [currentWordIndex, filteredWords, stopTimer]);

  const check = useCallback(
    (userWord) => {
      if (userWord === word.translation) {
        setPoints((points) => points + 1);
      }
      next();
    },
    [word, next]
  );

  const initGame = useCallback(() => {
    startTimer();
  }, [startTimer]);

  useEffect(initGame, []);

  return {
    filteredWords,
    currentWordIndex,
    word,
    check,
    next,
    points,
    isGameFinished,
    timer,
    startTimer,
    stopTimer
  };
};
