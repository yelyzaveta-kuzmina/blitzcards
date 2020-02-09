import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguages } from './state';
import Button from '../../components/button';
import useNewLanguageModalWindow from '../add-new-language-modal-window/state';
import AddNewLanguageModalWindow from '../add-new-language-modal-window';
import NoItemsExist from '../../components/no-items-exist';
import styles from './styles.module.scss';

const Languages = () => {
  const { languages } = useLanguages();
  const { isNewLanguageModalOpen, setNewLanguageModalOpen } = useNewLanguageModalWindow();

  return (
    <>
      {isNewLanguageModalOpen && (
        <AddNewLanguageModalWindow onClose={() => setNewLanguageModalOpen(false)} />
      )}
      {languages.length === 0 ? (
        <NoItemsExist
          title={'it is a good time to start learning some language'}
          buttonText={'add new language'}
          onClick={() => setNewLanguageModalOpen(true)}
        />
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.title}>Languages</div>
            <Button
              text={'add new category'}
              className={styles.button}
              onClick={() => setNewLanguageModalOpen(true)}
            />
          </div>
          <div className={styles.existingLanguagesRow}>
            {languages.map((language, index) => (
              <NavLink
                to={`/language/${language.targetLanguage}`}
                key={index}
                className={styles.existingLanguage}>
                <div className={styles.languagesPairBox}>
                  <span className={styles.targetLanguage}>{language.targetLanguage}</span>
                  <span className={styles.sourceLanguage}>{language.sourceLanguage}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Languages;
