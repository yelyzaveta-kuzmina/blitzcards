import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useCategories } from '../../state/categories';
import { useLanguages } from '../../state/languages';
import ToPreviousPageButton from '../../components/to-previous-page-button';
import NoItemsExist from '../../components/items-dependent-view/no-items-exist';
import ItemsExist from '../../components/items-dependent-view/items-exist';
import AddNewCategoryModalWindow from '../add-new-category-modal-window';
import AlertBox from '../../components/alert-box';
import styles from './styles.module.scss';
import DeleteButton from '../../components/delete-button';

const SelectedLanguage = () => {
  const { languages } = useLanguages();
  const { categories, onCategoryDelete } = useCategories();
  const { sourceLanguage, targetLanguage } = useRouteMatch().params;
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [categoryIdToRemove, setCategoryIdToRemove] = useState(null);

  const selectedLanguage = languages.find((language) => {
    return language.sourceLanguage === sourceLanguage && language.targetLanguage === targetLanguage;
  });

  const filteredCategories = categories.filter(
    (category) => category.languageId === selectedLanguage.id
  );

  const categoryToRemove = filteredCategories.find(
    (category) => category.id === categoryIdToRemove
  );

  if (!selectedLanguage) {
    return "Language doesn't exist";
  }

  return (
    <>
      <ToPreviousPageButton className={styles.toPreviousPageButton} to="/languages" />
      {isNewCategoryModalOpen && (
        <AddNewCategoryModalWindow
          onClose={() => setNewCategoryModalOpen(false)}
          languageId={selectedLanguage.id}
        />
      )}
      {filteredCategories.length === 0 && (
        <NoItemsExist
          title={
            <>
              Let's create a new category for <b>{sourceLanguage}</b>!
            </>
          }
          buttonText={'add new category'}
          onClick={() => setNewCategoryModalOpen(true)}
        />
      )}

      {filteredCategories.length > 0 && (
        <ItemsExist
          title={sourceLanguage}
          buttonText={'add new category'}
          onClick={() => setNewCategoryModalOpen(true)}>
          {filteredCategories.map((category, index) => (
            <NavLink
              to={`/${sourceLanguage}-${targetLanguage}/${category.name}`}
              key={index}
              className={styles.category}>
              {category.name}
              <DeleteButton
                className={styles.deleteButton}
                onClick={(event) => {
                  event.preventDefault();
                  setCategoryIdToRemove(category.id);
                }}
              />
            </NavLink>
          ))}

          {categoryToRemove && (
            <AlertBox
              text={`Are you sure you want to permanently remove ${categoryToRemove.name} category?`}
              onApprove={() => onCategoryDelete(categoryIdToRemove)}
              onDecline={() => setCategoryIdToRemove(null)}
              onModalClose={() => setCategoryIdToRemove(null)}
            />
          )}
        </ItemsExist>
      )}
    </>
  );
};

export default SelectedLanguage;
