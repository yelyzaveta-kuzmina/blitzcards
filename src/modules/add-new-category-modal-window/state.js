import { useState } from 'react';

export const useNewCategoryModalWindow = ({ language, targetLanguage }) => {
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [categoryInputValue, setCategoryInputValue] = useState({
    categoryBelongsToLanguage: language,
    targetLanguage
  });

  const inputHandleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setCategoryInputValue((state) => ({ ...state, [name]: newValue }));
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
