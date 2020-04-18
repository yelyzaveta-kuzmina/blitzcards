import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { persistCategory, getPersistedCategory } from '../modules/categories/utils/local-storage';
import { uuid } from 'uuidv4';

const initialCategories = getPersistedCategory();

const CategoriesContext = createContext({});

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialCategories);

  const onCategoryAdd = useCallback((category) => {
    const newCategory = {
      id: uuid(),
      ...category
    };
    setCategories((categories) => [...categories, newCategory]);
  }, []);

  const onCategoryDelete = useCallback(
    (categoryIdToRemove) => {
      const newCategories = categories.filter((category) => category.id !== categoryIdToRemove);
      setCategories(newCategories);
    },
    [categories]
  );

  useEffect(() => {
    persistCategory(categories);
  }, [categories]);

  const value = {
    categories,
    onCategoryAdd,
    onCategoryDelete
  };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export const useCategories = () => useContext(CategoriesContext);

export default CategoriesProvider;
