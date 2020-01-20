import { useState } from 'react';

export const useNewLanguageModalWindow = () => {
  const [isNewLanguageModalOpen, setNewLanguageModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputHandleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setInputValue({ [name]: newValue });
  };

  console.log(inputValue);

  return {
    isNewLanguageModalOpen,
    setNewLanguageModalOpen,
    inputValue,
    setInputValue,
    inputHandleChange
  };
};

export default useNewLanguageModalWindow;
