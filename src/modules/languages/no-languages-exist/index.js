import React from 'react';
import Button from '../../../components/button';
import AddNewLanguageModalWindow from '../../add-new-language-modal-window';
import useNewLanguageModalWindow from '../../add-new-language-modal-window/state';
import styles from './styles.module.scss';

const NoLanguagesExist = () => {
  const { isNewLanguageModalOpen, setNewLanguageModalOpen } = useNewLanguageModalWindow();

  return (
    <>
      {isNewLanguageModalOpen && (
        <AddNewLanguageModalWindow setNewLanguageModalOpen={setNewLanguageModalOpen} />
      )}
      <div className={styles.title}>{'it is a good time to start learning some language'}</div>
      <Button
        text={'add new language'}
        className={styles.button}
        onClick={() => setNewLanguageModalOpen(true)}
      />
    </>
  );
};

export default NoLanguagesExist;
