import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import SideMenu from './side-menu';
import TranslationDirectionSetting from './translation-direction';
import styles from './styles.module.scss';

const GameSettingsWindow = () => {
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const [currentSetting, setCurrentSetting] = useState('Translation Direction');

  const items = [
    {
      label: 'Translation Direction'
    },
    {
      label: 'Cursor'
    }
  ];

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
            onClick={() => setCurrentSetting(item.label)}
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
