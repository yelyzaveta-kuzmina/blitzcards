import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguagesContext = createContext({});

const LanguagesProvider = ({ children }) => {
  const [languages, setLanguages] = useState([]);

  const onLanguageAdd = useCallback((language) => {
    setLanguages((languages) => [...languages, language]);
  }, []);

  const value = {
    languages,
    onLanguageAdd
  };

  return <LanguagesContext.Provider value={value}>{children}</LanguagesContext.Provider>;
};

export const useLanguages = () => useContext(LanguagesContext);

export default LanguagesProvider;
