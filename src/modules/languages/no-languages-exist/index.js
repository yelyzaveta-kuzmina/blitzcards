import React, { useState } from 'react';
import Button from '../../../components/button';
import AddNewLanguageModalWindow from '../../add-new-language-modal-window';
import styles from './styles.module.scss';

const NoLanguagesExist = () => {
  const [isNewLanguageModalOpen, setNewLanguageModalOpen] = useState(false);

  return (
    <>
      {isNewLanguageModalOpen && <AddNewLanguageModalWindow />}
      <div className={styles.title}>{'it is a good time to start learning some language'}</div>
      <Button text={'add new language'} onClick={() => setNewLanguageModalOpen(true)} />
    </>
  );
};

export default NoLanguagesExist;
