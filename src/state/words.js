import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { persistWord, getPersistedWord } from '../modules/words/utils/local-storage';
import { uuid } from 'uuidv4';

const initialWords = getPersistedWord();

const WordsContext = createContext({});

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState(initialWords);

  const onWordAdd = useCallback((word) => {
    const newWord = {
      id: uuid(),
      ...word
    };
    setWords((words) => [...words, newWord]);
  }, []);

  const onWordDelete = useCallback(
    (wordIdToRemove) => {
      const newWords = words.filter((word) => word.id !== wordIdToRemove);
      setWords(newWords);
    },
    [words]
  );

  useEffect(() => {
    persistWord(words);
  }, [words]);

  const value = {
    words,
    onWordAdd,
    onWordDelete
  };

  return <WordsContext.Provider value={value}>{children}</WordsContext.Provider>;
};

export const useWords = () => useContext(WordsContext);

export default WordsProvider;
