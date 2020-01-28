import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { persistCategory, getPersistedCategory } from './utils/local-storage';

const initialCategories = getPersistedCategory();

const CategoriesContext = createContext({});

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialCategories);

  const onCategoryAdd = useCallback((category) => {
    setCategories((categories) => [...categories, category]);
  }, []);

  useEffect(() => {
    persistCategory(categories);
  }, [categories]);

  const value = {
    categories,
    onCategoryAdd
  };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export const useCategories = () => useContext(CategoriesContext);

export default CategoriesProvider;
