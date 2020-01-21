import { useState } from 'react';

export const useLanguages = () => {
  const [languages, setLanguages] = useState([]);

  console.log(languages);

  const onLanguageAdd = (language) => {
    setLanguages([...languages, language]);
  };

  return { languages, onLanguageAdd };
};

export default useLanguages;
