import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext({});

const AppStateProvider = ({ children }) => {
  const [submittedTranslationDirection, setTranslationDirection] = useState('sourceLanguage');

  const value = {
    submittedTranslationDirection,
    setTranslationDirection
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

export default AppStateProvider;
