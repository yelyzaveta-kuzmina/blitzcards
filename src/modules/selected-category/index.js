import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useLanguages } from '../../state/languages';
import { useCategories } from '../../state/categories';
import { useWords } from '../../state/words';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import AddNewWordModalWindow from '../add-new-word-modal-window';
import NoItemsExist from '../../components/items-dependent-view/no-items-exist';
import ItemsExist from '../../components/items-dependent-view/items-exist';
import LinkButton from '../../components/link-button';
import AlertBox from '../../components/alert-box';
import DeleteButton from '../../components/delete-button';
import LightningImage from '../../assets/images/lightning.png';
import styles from './styles.module.scss';

const SelectedCategory = () => {
  const { categories } = useCategories();
  const { languages } = useLanguages();
  const { words, onWordDelete } = useWords();
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const [isNewWordModalOpen, setNewWordModalOpen] = useState(false);
  const [wordIdToRemove, setWordIdToRemove] = useState(null);

  const selectedLanguage = languages.find((language) => {
    return language.sourceLanguage === sourceLanguage && language.targetLanguage === targetLanguage;
  });

  const selectedCategory = categories.find((category) => {
    return category.name === categoryName && category.languageId === selectedLanguage.id;
  });

  const filteredWords = words.filter((word) => word.categoryId === selectedCategory.id);

  const wordToRemove = filteredWords.find((word) => word.id === wordIdToRemove);

  if (!selectedCategory) {
    return "Category doesn't exist";
  }

  return (
    <>
      <ToPreviousPageButton
        className={styles.toPreviousPageButton}
        to={`/${sourceLanguage}-${targetLanguage}`}
      />
      {isNewWordModalOpen && (
        <AddNewWordModalWindow
          onClose={() => setNewWordModalOpen(false)}
          categoryId={selectedCategory.id}
        />
      )}
      {filteredWords.length === 0 && (
        <NoItemsExist
          title={
            <>
              You don't have any words in <b>{categoryName}</b> category. Let's add something!
            </>
          }
          buttonText={'add new word'}
          onClick={() => setNewWordModalOpen(true)}
        />
      )}

      {filteredWords.length > 0 && (
        <>
          <ItemsExist
            title={categoryName}
            buttonText={'add new word'}
            onClick={() => setNewWordModalOpen(true)}>
            <div className={styles.wrapper}>
              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span className={styles.spaceCell} />
                  <span className={styles.titleCell}>word</span>
                  <span className={styles.spaceCell} />
                  <span className={styles.titleCell}>translation</span>
                </div>
                <div className={styles.tableBody}>
                  {filteredWords.map((word, index) => (
                    <div key={index} className={styles.wordsPairRow}>
                      <span className={styles.spaceCell}>{index + 1}.</span>
                      <span className={styles.wordCell}>{word.word}</span>
                      <span className={styles.spaceCell} />
                      <span className={styles.wordCell}>{word.translation}</span>
                      <DeleteButton
                        className={styles.deleteButton}
                        onClick={(event) => {
                          event.preventDefault();
                          setWordIdToRemove(word.id);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.startGameButtonWrapper}>
                <LinkButton
                  to=""
                  text={'start game'}
                  classNameButton={styles.button}
                  classNameText={styles.text}
                />
                <LinkButton to="" text={'settings'} classNameButton={styles.settingsButton} />
                <img src={LightningImage} alt="Lightning" className={styles.lightningImage} />
              </div>
            </div>

            {wordToRemove && (
              <AlertBox
                text={`Are you sure you want to permanently remove ${wordToRemove.word} word from the list?`}
                onApprove={() => onWordDelete(wordIdToRemove)}
                onDecline={() => setWordIdToRemove(null)}
                onModalClose={() => setWordIdToRemove(null)}
              />
            )}
          </ItemsExist>
        </>
      )}
    </>
  );
};

export default SelectedCategory;
