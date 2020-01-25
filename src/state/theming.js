import React, { createContext, useContext, useState, useEffect } from 'react';
import { setCssVariable } from '../utils/css';
import {
  persistBackgroundColor,
  getPersistedBackgroundColor,
  persistTextColor,
  getPersistedTextColor,
  persistDisplayColor,
  getPersistedDisplayColor
} from '../utils/local-storage';

const DEFAULT_BACKGRONUD_COLOR = '#5d5abf';
const DEFAULT_TEXT_COLOR = '#333';
const DEFAULT_DISPLAY_COLOR = 'white';

const persistedBackgroundColor = getPersistedBackgroundColor();
const persistedTextColor = getPersistedTextColor();
const persistedDisplayColor = getPersistedDisplayColor();

setCssVariable('--background-color', persistBackgroundColor);
setCssVariable('--text-color', persistTextColor);
setCssVariable('--display-color', persistedDisplayColor);

const ThemingContext = createContext({});

const ThemingProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    persistedBackgroundColor || DEFAULT_BACKGRONUD_COLOR
  );
  const [textColor, setTextColor] = useState(persistedTextColor || DEFAULT_TEXT_COLOR);
  const [displayColor, setDisplayColor] = useState(persistedDisplayColor || DEFAULT_DISPLAY_COLOR);

  useEffect(() => {
    setCssVariable('--background-color', backgroundColor);
    persistBackgroundColor(backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    setCssVariable('--text-color', textColor);
    persistTextColor(textColor);
  }, [textColor]);

  useEffect(() => {
    setCssVariable('--display-color', displayColor);
    persistDisplayColor(displayColor);
  }, [displayColor]);

  const value = {
    backgroundColor,
    textColor,
    displayColor,
    setBackgroundColor,
    setTextColor,
    setDisplayColor
  };

  return <ThemingContext.Provider value={value}>{children}</ThemingContext.Provider>;
};

export const useTheming = () => useContext(ThemingContext);

export default ThemingProvider;