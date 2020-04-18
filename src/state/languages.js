import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { persistLanguage, getPersistedLanguage } from '../modules/languages/utils/local-storage';

const initialLanguages = getPersistedLanguage();

const LanguagesContext = createContext({});

const LanguagesProvider = ({ children }) => {
  const [languages, setLanguages] = useState(initialLanguages);

  const onLanguageAdd = useCallback((language) => {
    setLanguages((languages) => [...languages, language]);
  }, []);

  const onLanguageDelete = useCallback(
    (languageIdToRemove) => {
      const newLanguages = languages.filter((language) => language.id !== languageIdToRemove);
      setLanguages(newLanguages);
    },
    [languages]
  );

  useEffect(() => {
    persistLanguage(languages);
  }, [languages]);

  const value = {
    languages,
    onLanguageAdd,
    onLanguageDelete
  };

  return <LanguagesContext.Provider value={value}>{children}</LanguagesContext.Provider>;
};

export const useLanguages = () => useContext(LanguagesContext);

export default LanguagesProvider;
