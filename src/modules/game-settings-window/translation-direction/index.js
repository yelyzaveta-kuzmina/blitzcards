import React, { useState, useEffect } from 'react';
import { useAppState } from '../../../state';
import ArrowsImage from '../../../assets/images/arrows.png';
import Button from '../../../components/button';
import styles from './styles.module.scss';

const TranslationDirectionSetting = ({ sourceLanguage, targetLanguage }) => {
  const { submittedTranslationDirection, setTranslationDirection } = useAppState();
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

  const [newSourceLanguage, newTargetLanguage] =
    languageToTranslateFrom === 'sourceLanguage'
      ? [sourceLanguage, targetLanguage]
      : [targetLanguage, sourceLanguage];

  return (
    <>
      {isConfirmationVisible && (
        <div className={styles.confirmationToast}>
          {`Translation set: from -  ${newSourceLanguage} to ${newTargetLanguage} `}
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
    </>
  );
};

export default TranslationDirectionSetting;
