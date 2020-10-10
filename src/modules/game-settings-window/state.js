import { useEffect, useState } from 'react';

const KeyboardKey = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown'
};

export const useSettingsSideMenu = ({ menuOptions }) => {
  const [selectedSettingIndex, setSelectedSettingIndex] = useState(0);

  useEffect(() => {
    const openPreviousSettingPage = () =>
      setSelectedSettingIndex((index) => (index - 1 + menuOptions.length) % menuOptions.length);
    const openNextSettingPage = () =>
      setSelectedSettingIndex((index) => (index + 1) % menuOptions.length);

    const handleKeyDown = (event) => {
      if (event.key === KeyboardKey.ARROW_UP) {
        openPreviousSettingPage();
      }
      if (event.key === KeyboardKey.ARROW_DOWN) {
        openNextSettingPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { selectedSettingIndex, setSelectedSettingIndex };
};
