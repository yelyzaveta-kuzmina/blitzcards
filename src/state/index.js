import React, { createContext, useContext } from 'react';
import { useLanguages } from './languages';

const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const { languages, onLanguageAdd } = useLanguages();
  const value = { languages, onLanguageAdd };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
