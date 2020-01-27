import { useState } from 'react';

export const useNewCategoryModalWindow = (language) => {
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [categoryInputValue, setCategoryInputValue] = useState({});

  const inputHandleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setCategoryInputValue({ [name]: newValue, categoryBelongsToLanguage: language });
  };

  return {
    isNewCategoryModalOpen,
    setNewCategoryModalOpen,
    categoryInputValue,
    setCategoryInputValue,
    inputHandleChange
  };
};

export default useNewCategoryModalWindow;
