import React, { createContext } from 'react';
import { useCategories } from './categories';

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const { categories, onCategoryAdd } = useCategories();
  const value = { categories, onCategoryAdd };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
