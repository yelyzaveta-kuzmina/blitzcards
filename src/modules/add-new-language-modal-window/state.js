import { useState } from 'react';

export const useNewLanguageModalWindow = () => {
  const [isNewLanguageModalOpen, setNewLanguageModalOpen] = useState(false);
  const [languageInputValues, setLanguageInputValues] = useState({});

  const inputHandleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setLanguageInputValues({ ...languageInputValues, [name]: newValue });
  };

  return {
    isNewLanguageModalOpen,
    setNewLanguageModalOpen,
    languageInputValues,
    setLanguageInputValues,
    inputHandleChange
  };
};

export default useNewLanguageModalWindow;
