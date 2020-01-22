import React, { createContext, useContext } from 'react';

const AppStateContext = createContext({});

const AppStateProvider = ({ children }) => {
  return <AppStateContext.Provider value={{}}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

export default AppStateProvider;
