import React, { createContext, useContext, useState, useCallback } from 'react';

const CategoriesContext = createContext({});

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const onCategoryAdd = useCallback((category) => {
    setCategories((categories) => [...categories, category]);
  }, []);

  const value = {
    categories,
    onCategoryAdd
  };

  console.log(categories);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export const useCategories = () => useContext(CategoriesContext);

export default CategoriesProvider;
