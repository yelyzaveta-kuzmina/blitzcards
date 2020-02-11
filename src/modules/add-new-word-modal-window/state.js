import { useState } from 'react';

export const useNewWordModalWindow = (category) => {
  const [isNewWordModalOpen, setNewWordModalOpen] = useState(false);
  const [wordInputValues, setWordInputValues] = useState({});

  const inputHandleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setWordInputValues({ ...wordInputValues, [name]: newValue, wordBelongsToCategory: category });
  };

  return {
    isNewWordModalOpen,
    setNewWordModalOpen,
    wordInputValues,
    setWordInputValues,
    inputHandleChange
  };
};

export default useNewWordModalWindow;
