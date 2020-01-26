import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguages } from '../state';
import useNewLanguageModalWindow from '../../add-new-language-modal-window/state';
import Button from '../../../components/button';
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
      <Button
        text={'add new language'}
        className={styles.button}
        onClick={() => setNewLanguageModalOpen(true)}
      />
      <div className={styles.existingLanguagesRow}>
        {languages.map((language, index) => (
          <NavLink
            to={`/language/${language.targetLanguage}`}
            key={index}
            className={styles.existingLanguage}>
            {language.targetLanguage}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default LanguagesExist;
