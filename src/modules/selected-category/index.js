import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useCategories } from '../../state/categories';
import { useWords } from '../../state/words';
import AddNewWordModalWindow from '../add-new-word-modal-window';
import NoItemsExist from '../../components/items-dependent-view/no-items-exist';
import ItemsExist from '../../components/items-dependent-view/items-exist';
import DeleteButton from '../../components/delete-button';
import styles from './styles.module.scss';
import { useLanguages } from '../../state/languages';

const SelectedCategory = () => {
  const { categories } = useCategories();
  const { languages } = useLanguages();
  const { words } = useWords();
  const { sourceLanguage, targetLanguage, category: categoryName } = useRouteMatch().params;
  const [isNewWordModalOpen, setNewWordModalOpen] = useState(false);

  const selectedLanguage = languages.find((language) => {
    return language.sourceLanguage === sourceLanguage && language.targetLanguage === targetLanguage;
  });

  const selectedCategory = categories.find((category) => {
    return category.name === categoryName && category.languageId === selectedLanguage.id;
  });

  const filteredWords = words.filter((word) => word.categoryId === selectedCategory.id);

  if (!selectedCategory) {
    return "Category doesn't exist";
  }

  return (
    <>
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
        <ItemsExist
          title={categoryName}
          buttonText={'add new word'}
          onClick={() => setNewWordModalOpen(true)}>
          <div className={styles.wordsWrapper}>
            {filteredWords.map((word, index) => (
              <div key={index} className={styles.wordsPairRow}>
                <span className={styles.orderNumber}>{index + 1}.</span>
                <span className={styles.wordToLearn}>{word.word}</span>
                <span className={styles.translation}>{word.translation}</span>
                <DeleteButton className={styles.deleteButton} />
              </div>
            ))}
          </div>
        </ItemsExist>
      )}
    </>
  );
};

export default SelectedCategory;
