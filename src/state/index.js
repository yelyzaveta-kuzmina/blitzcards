import React, { createContext } from 'react';

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const value = {};

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
