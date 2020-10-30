import { createContext, useContext, useState } from 'react';
import { caretOptions } from '../utils/carets';

const AppStateContext = createContext({});

const AppStateProvider = ({ children }) => {
  const [submittedTranslationDirection, setTranslationDirection] = useState('sourceLanguage');
  const [caretIndex, setCaretIndex] = useState(0);
  const [submittedCaret, setSubmittedCaret] = useState(caretOptions[caretIndex]);

  const value = {
    submittedTranslationDirection,
    setTranslationDirection,
    caretIndex,
    setCaretIndex,
    submittedCaret,
    setSubmittedCaret
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

export default AppStateProvider;
