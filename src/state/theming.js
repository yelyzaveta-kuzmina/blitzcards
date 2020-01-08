import React, { createContext, useContext, useState, useEffect } from 'react';
import { persistBackgroundColor, getPersistedBackgroundColor } from '../utils/local-storage';

const DEFAULT_BACKGRONUD_COLOR = '#5d5abf';

const persistedBackgroundColor = getPersistedBackgroundColor();

const ThemingContext = createContext({});

const ThemingProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    persistedBackgroundColor || DEFAULT_BACKGRONUD_COLOR
  );

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    persistBackgroundColor(backgroundColor);
  }, [backgroundColor]);

  const value = {
    backgroundColor,
    setBackgroundColor
  };

  return <ThemingContext.Provider value={value}>{children}</ThemingContext.Provider>;
};

export const useTheming = () => useContext(ThemingContext);

export default ThemingProvider;
