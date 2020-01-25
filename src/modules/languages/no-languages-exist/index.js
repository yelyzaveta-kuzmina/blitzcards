import React from 'react';
import AddNewLanguageModalWindow from '../../add-new-language-modal-window';
import AddNewLanguageButton from '../components/new-language-button';
import useNewLanguageModalWindow from '../../add-new-language-modal-window/state';
import styles from './styles.module.scss';

const NoLanguagesExist = () => {
  const { isNewLanguageModalOpen, setNewLanguageModalOpen } = useNewLanguageModalWindow();

  return (
    <>
      {isNewLanguageModalOpen && (
        <AddNewLanguageModalWindow onClose={() => setNewLanguageModalOpen(false)} />
      )}
      <div className={styles.title}>{'it is a good time to start learning some language'}</div>
      <AddNewLanguageButton
        className={styles.button}
        onClick={() => setNewLanguageModalOpen(true)}
      />
    </>
  );
};

export default NoLanguagesExist;
