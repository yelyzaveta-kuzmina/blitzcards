import { useState, useCallback } from 'react';
import uuidv4 from 'uuid/v4';

const getEmptyCategoryObject = () => ({
  id: uuidv4(),
  title: ''
});

export const useCategories = () => {
  const [categories, setCategories] = useState(null);

  console.log(categories);

  const onCategoryAdd = useCallback(() => {
    const newCategory = getEmptyCategoryObject();
    setCategories([...categories, newCategory]);
  }, [categories, setCategories]);

  return { categories, onCategoryAdd };
};

export default useCategories;
