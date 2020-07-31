import React, { useState, useEffect } from 'react';
import { useAppState } from '../../state';
import { useRouteMatch } from 'react-router-dom';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import ArrowsImage from '../../assets/images/arrows.png';
import Button from '../../components/button';
import styles from './styles.module.scss';

const GameSettingsWindow = () => {
  const { submittedTranslationDirection, setTranslationDirection } = useAppState();
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const [languageToTranslateFrom, setLanguageToTranslateFrom] = useState(
    submittedTranslationDirection
  );
  const [isConfirmationVisible, setConfirmationVisibility] = useState(false);
  const [isTranslationDirectionChangeAllowed, setTranslationChangePermission] = useState(true);

  const onChangeTranslationDirection = () => {
    if (languageToTranslateFrom === 'sourceLanguage') {
      setLanguageToTranslateFrom('targetLanguage');
    } else {
      setLanguageToTranslateFrom('sourceLanguage');
    }
  };

  const onUpdateConfirmationVisibility = () => {
    setConfirmationVisibility(true);
  };

  const onSubmitTranslationDirection = () => {
    setTranslationDirection(languageToTranslateFrom);
    setTranslationChangePermission(false);
    onUpdateConfirmationVisibility();
  };

  useEffect(() => {
    if (isConfirmationVisible) {
      const timerId = setTimeout(() => {
        setConfirmationVisibility(false);
        setTranslationChangePermission(true);
      }, 3000);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [isConfirmationVisible]);

  console.log(isTranslationDirectionChangeAllowed);

  const [newSourceLanguage, newTargetLanguage] =
    languageToTranslateFrom === 'sourceLanguage'
      ? [sourceLanguage, targetLanguage]
      : [targetLanguage, sourceLanguage];

  return (
    <div className={styles.settingsWrapper}>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}/${categoryName}`}
      />
      {isConfirmationVisible && (
        <div className={styles.confirmationToast}>
          {`translation direction set as followed: translate from -  ${newSourceLanguage} to ${newTargetLanguage} `}
        </div>
      )}
      <div className={styles.settingsDetails}>
        <div className={styles.settingTitle}>translation direction:</div>
        <div className={styles.languagesDirection}>
          <span className={styles.language}>{newSourceLanguage}</span>
          <button
            className={styles.arrowsImageButton}
            disabled={!isTranslationDirectionChangeAllowed}
            onClick={() => onChangeTranslationDirection()}>
            <img src={ArrowsImage} alt="Lightning" className={styles.arrowsImage} />
          </button>
          <span className={styles.language}>{newTargetLanguage}</span>
        </div>
      </div>
      <Button text={'submit'} className={styles.button} onClick={onSubmitTranslationDirection} />
    </div>
  );
};

export default GameSettingsWindow;
