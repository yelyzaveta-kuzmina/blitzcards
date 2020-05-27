import React from 'react';
import { useAppState } from '../../state';
import { useRouteMatch } from 'react-router-dom';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import ArrowsImage from '../../assets/images/arrows.png';
import styles from './styles.module.scss';

const GameSettingsWindow = () => {
  const { translationDirection, setTranslationDirection } = useAppState();
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;

  const onChangeTranslationDirection = () => {
    if (translationDirection === 'sourceLanguage') {
      setTranslationDirection('targetLanguage');
    } else {
      setTranslationDirection('sourceLanguage');
    }
  };

  return (
    <>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}/${categoryName}`}
      />
      <div className={styles.settingTitle}>Choose the direction of translation:</div>
      <div className={styles.settingDetails}>
        {translationDirection === 'sourceLanguage' ? (
          <span className={styles.language}>{sourceLanguage}</span>
        ) : (
          <span className={styles.language}>{targetLanguage}</span>
        )}
        <img
          src={ArrowsImage}
          alt="Lightning"
          className={styles.arrowsImage}
          onClick={() => onChangeTranslationDirection()}
        />
        {translationDirection === 'sourceLanguage' ? (
          <span className={styles.language}>{targetLanguage}</span>
        ) : (
          <span className={styles.language}>{sourceLanguage}</span>
        )}
      </div>
    </>
  );
};

export default GameSettingsWindow;
