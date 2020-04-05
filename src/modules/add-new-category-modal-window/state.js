import { useState, useCallback } from 'react';
import { useCategories } from '../../state/categories';

export const useNewCategoryModalWindow = ({ languageId }) => {
  const { onCategoryAdd } = useCategories();
  const [categoryInputValue, setCategoryInputValue] = useState('');

  const onCategorySubmit = useCallback(() => {
    onCategoryAdd({
      languageId,
      name: categoryInputValue
    });
  }, [languageId, categoryInputValue, onCategoryAdd]);

  return {
    categoryInputValue,
    setCategoryInputValue,
    onCategorySubmit
  };
};

export default useNewCategoryModalWindow;
