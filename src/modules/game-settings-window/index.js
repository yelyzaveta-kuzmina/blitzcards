import React, { useState, useCallback, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import SideMenu from './side-menu';
import TranslationDirectionSetting from './translation-direction';
import styles from './styles.module.scss';

const items = [
  {
    label: 'Translation Direction'
  },
  {
    label: 'Cursor'
  }
];

const KeyboardKey = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown'
};

// const ALLOWED_KEYS = ['ArrowUp', 'ArrowDown'];

const GameSettingsWindow = () => {
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const [selectedSettingIndex, setSelectedSettingIndex] = useState(0);
  const currentSetting = items[selectedSettingIndex].label;

  useEffect(() => {
    const openPreviousSettingPage = () =>
      setSelectedSettingIndex((index) => (index - 1 + items.length) % items.length);
    const openNextSettingPage = () =>
      setSelectedSettingIndex((index) => (index + 1) % items.length);

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

  return (
    <div className={styles.settingsWrapper}>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}/${categoryName}`}
      />
      <div className={styles.sideMenuWrapper}>
        {items.map((item, index) => (
          <SideMenu
            item={item}
            selectedItem={currentSetting}
            key={index}
            onClick={() => setSelectedSettingIndex(index)}
          />
        ))}
      </div>
      {currentSetting === 'Translation Direction' && (
        <TranslationDirectionSetting
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
        />
      )}
      {currentSetting === 'Cursor' && <div>huray</div>}
    </div>
  );
};

export default GameSettingsWindow;
