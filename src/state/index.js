import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext({});

const AppStateProvider = ({ children }) => {
  const [translationDirection, setTranslationDirection] = useState('sourceLanguage');

  const value = {
    translationDirection,
    setTranslationDirection
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

export default AppStateProvider;
