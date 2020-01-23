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
    <div className={styles.existingLanguagesWrapper}>
      {isNewLanguageModalOpen && (
        <AddNewLanguageModalWindow onClose={() => setNewLanguageModalOpen(false)} />
      )}
      <AddNewLanguageButton onClick={() => setNewLanguageModalOpen(true)} />
      {languages.map((language, index) => (
        <div key={index}>{language.targetLanguage}</div>
      ))}
    </div>
  );
};

export default LanguagesExist;
