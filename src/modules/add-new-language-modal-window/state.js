import { useState } from 'react';
import uuid from 'uuid/v4';

export const useNewLanguageModalWindow = () => {
  const [isNewLanguageModalOpen, setNewLanguageModalOpen] = useState(false);
  const [languageInputValues, setLanguageInputValues] = useState({ id: uuid() });

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
