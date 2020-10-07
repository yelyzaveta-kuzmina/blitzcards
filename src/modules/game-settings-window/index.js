import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSettingsSideMenu } from './state';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import SideMenu from './side-menu';
import TranslationDirectionSetting from './translation-direction';
import CaretSetting from './caret';
import styles from './styles.module.scss';

const menuOptions = [
  {
    label: 'Caret'
  },
  {
    label: 'Translation Direction'
  }
];

const GameSettingsWindow = () => {
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const { selectedSettingIndex, setSelectedSettingIndex } = useSettingsSideMenu({ menuOptions });
  const currentSetting = menuOptions[selectedSettingIndex].label;

  return (
    <div className={styles.settingsWrapper}>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}/${categoryName}`}
      />
      <div className={styles.sideMenuWrapper}>
        {menuOptions.map((item, index) => (
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
      {currentSetting === 'Caret' && <CaretSetting />}
    </div>
  );
};

export default GameSettingsWindow;
