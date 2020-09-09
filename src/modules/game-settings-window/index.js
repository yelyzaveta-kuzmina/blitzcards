import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import SideMenu from './side-menu';
import TranslationDirectionSetting from './translation-direction';
import styles from './styles.module.scss';

const GameSettingsWindow = () => {
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const [currentSetting, setCurrentSetting] = useState('test1');

  const items = [
    {
      label: 'test1'
    },
    {
      label: 'test2'
    }
  ].filter(Boolean);

  return (
    <div className={styles.settingsWrapper}>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}/${categoryName}`}
      />
      <div className={styles.sideMenuWrapper}>
        {items.map((item, index) => (
          <SideMenu item={item} key={index} />
        ))}
      </div>
      {currentSetting === 'test1' && (
        <TranslationDirectionSetting
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
        />
      )}
      {currentSetting === 'test2' && <div>huray</div>}
    </div>
  );
};

export default GameSettingsWindow;
