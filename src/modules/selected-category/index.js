import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useWords } from '../words/state';
import AddNewWordModalWindow from '../add-new-word-modal-window';
import NoItemsExist from '../../components/items-dependent-view/no-items-exist';
import ItemsExist from '../../components/items-dependent-view/items-exist';

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
      {filteredWords.length === 0 ? (
        <NoItemsExist
          title={
            <>
              You don't have any words in <b>{category}</b> category. Let's add something!
            </>
          }
          buttonText={'add new word'}
          onClick={() => setNewWordModalOpen(true)}
        />
      ) : (
        <ItemsExist
          title={category}
          buttonText={'add new word'}
          onClick={() => setNewWordModalOpen(true)}>
          {filteredWords.map((word, index) => (
            <div key={index}>
              <span>{word.targetWord}</span>
              <span>{word.sourceWord}</span>
            </div>
          ))}
        </ItemsExist>
      )}
    </>
  );
};

export default SelectedCategory;
