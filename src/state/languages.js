import { useState, useCallback } from 'react';
import uuidv4 from 'uuid/v4';

const getEmptyLanguageObject = () => ({
  id: uuidv4(),
  title: ''
});

export const useLanguages = () => {
  const [languages, setLanguages] = useState(null);

  console.log(languages);

  const onLanguageAdd = useCallback(() => {
    const newLanguage = getEmptyLanguageObject();
    setLanguages([...languages, newLanguage]);
  }, [languages, setLanguages]);

  return { languages, onLanguageAdd };
};

export default useLanguages;
