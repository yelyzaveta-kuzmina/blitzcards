import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useWords } from '../words/state';
import AddNewWordModalWindow from '../add-new-word-modal-window';
import NoItemsExist from '../../components/items-dependent-view/no-items-exist';
import ItemsExist from '../../components/items-dependent-view/items-exist';
import DeleteButton from '../../components/delete-button';
import styles from './styles.module.scss';

const SelectedCategory = () => {
  const { category } = useRouteMatch().params;

  const [isNewWordModalOpen, setNewWordModalOpen] = useState(false);
  const { words } = useWords();

  const filteredWords = words.filter((word) => word.wordBelongsToCategory === category);

  return (
    <>
      {isNewWordModalOpen && (
        <AddNewWordModalWindow onClose={() => setNewWordModalOpen(false)} category={category} />
      )}
      {filteredWords.length === 0 && (
        <NoItemsExist
          title={
            <>
              You don't have any words in <b>{category}</b> category. Let's add something!
            </>
          }
          buttonText={'add new word'}
          onClick={() => setNewWordModalOpen(true)}
        />
      )}

      {filteredWords.length > 0 && (
        <ItemsExist
          title={category}
          buttonText={'add new word'}
          onClick={() => setNewWordModalOpen(true)}>
          <div className={styles.wordsWrapper}>
            {filteredWords.map((word, index) => (
              <div key={index} className={styles.wordsPairRow}>
                <span className={styles.orderNumber}>{index + 1}.</span>
                <span className={styles.wordToLearn}>{word.targetWord}</span>
                <span className={styles.translation}>{word.sourceWord}</span>
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