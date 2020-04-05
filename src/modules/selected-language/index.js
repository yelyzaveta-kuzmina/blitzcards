import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useCategories } from '../../state/categories';
import { useLanguages } from '../../state/languages';
import NoItemsExist from '../../components/items-dependent/no-items-exist';
import ItemsExist from '../../components/items-dependent/items-exist';
import AddNewCategoryModalWindow from '../add-new-category-modal-window';
import styles from './styles.module.scss';

const SelectedLanguage = () => {
  const { languages } = useLanguages();
  const { sourceLanguage, targetLanguage } = useRouteMatch().params;
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);

  const selectedLanguage = languages.find((language) => {
    return language.sourceLanguage === sourceLanguage && language.targetLanguage === targetLanguage;
  });

  const { categories } = useCategories();

  const filteredCategories = categories.filter(
    (category) => category.languageId === selectedLanguage.id
  );

  if (!selectedLanguage) {
    return "Language doesn't exist";
  }

  return (
    <>
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
              to={`/${sourceLanguage}/${targetLanguage}/${category.name}`}
              key={index}
              className={styles.category}>
              {category.name}
            </NavLink>
          ))}
        </ItemsExist>
      )}
    </>
  );
};

export default SelectedLanguage;
