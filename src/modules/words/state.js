import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { persistWord, getPersistedWords } from './utils/local-storage';

const initialWords = getPersistedWords();

const WordsContext = createContext({});

const WordsProvider = ({ children }) => {
  const [words, setWord] = useState(initialWords);

  const onWordAdd = useCallback((word) => {
    setWord((words) => [...words, word]);
  }, []);

  useEffect(() => {
    persistWord(words);
  }, [words]);

  const value = {
    words,
    onWordAdd
  };

  return <WordsContext.Provider value={value}>{children}</WordsContext.Provider>;
};

export const useWords = () => useContext(WordsContext);

export default WordsProvider;
