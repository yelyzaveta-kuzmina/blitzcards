import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguages } from '../../state/languages';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import useNewLanguageModalWindow from '../add-new-language-modal-window/state';
import AddNewLanguageModalWindow from '../add-new-language-modal-window';
import AlertBox from '../../components/alert-box';
import NoItemsExist from '../../components/items-dependent-view/no-items-exist';
import ItemsExist from '../../components/items-dependent-view/items-exist';
import DeleteButton from '../../components/delete-button';
import styles from './styles.module.scss';

const Languages = () => {
  const { languages, onLanguageDelete } = useLanguages();
  const { isNewLanguageModalOpen, setNewLanguageModalOpen } = useNewLanguageModalWindow();
  const [languageIdToRemove, setLanguageIdToRemove] = useState(null);

  const languageToRemove = languages.find((language) => language.id === languageIdToRemove);

  return (
    <>
      <ToPreviousPageButton className={styles.toPreviousPageButton} to="/" />
      {isNewLanguageModalOpen && (
        <AddNewLanguageModalWindow onClose={() => setNewLanguageModalOpen(false)} />
      )}
      {languages.length === 0 && (
        <NoItemsExist
          title={'it is a good time to start learning some language'}
          buttonText={'add new language'}
          onClick={() => setNewLanguageModalOpen(true)}
        />
      )}

      {languages.length > 0 && (
        <>
          <ItemsExist
            title={'Languages'}
            buttonText={'add new language'}
            onClick={() => setNewLanguageModalOpen(true)}>
            {languages.map((language, index) => (
              <NavLink
                to={`/${language.sourceLanguage}-${language.targetLanguage}`}
                key={index}
                className={styles.existingLanguage}>
                <div className={styles.languagesPairBox}>
                  <DeleteButton
                    className={styles.deleteButton}
                    onClick={(event) => {
                      event.preventDefault();
                      setLanguageIdToRemove(language.id);
                    }}
                  />
                  <span>{language.targetLanguage}</span>
                  <span className={styles.sourceLanguage}>{language.sourceLanguage}</span>
                </div>
              </NavLink>
            ))}

            {languageToRemove && (
              <AlertBox
                text={`Are you sure you want to permanently remove ${languageToRemove.targetLanguage} language from your learning list?`}
                onApprove={() => onLanguageDelete(languageIdToRemove)}
                onDecline={() => setLanguageIdToRemove(null)}
                onModalClose={() => setLanguageIdToRemove(null)}
              />
            )}
          </ItemsExist>
        </>
      )}
    </>
  );
};

export default Languages;
