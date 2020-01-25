import React from 'react';
import { useLanguages } from '../../../state/languages';
import useNewLanguageModalWindow from '../../add-new-language-modal-window/state';
import AddNewLanguageButton from '../components/new-language-button';
import AddNewLanguageModalWindow from '../../add-new-language-modal-window';
import styles from './styles.module.scss';

const LanguagesExist = () => {
  const { languages } = useLanguages();
  const { isNewLanguageModalOpen, setNewLanguageModalOpen } = useNewLanguageModalWindow();

  return (
    <>
      {isNewLanguageModalOpen && (
        <AddNewLanguageModalWindow onClose={() => setNewLanguageModalOpen(false)} />
      )}
      <AddNewLanguageButton
        className={styles.button}
        onClick={() => setNewLanguageModalOpen(true)}
      />
      <div className={styles.existingLanguagesRow}>
        {languages.map((language, index) => (
          <div key={index} className={styles.existingLanguage}>
            {language.targetLanguage}
          </div>
        ))}
      </div>
    </>
  );
};

export default LanguagesExist;
