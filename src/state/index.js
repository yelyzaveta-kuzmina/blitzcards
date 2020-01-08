import React, { createContext, useContext } from 'react';
import { useCategories } from './categories';

const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const { categories, onCategoryAdd } = useCategories();
  const value = { categories, onCategoryAdd };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
