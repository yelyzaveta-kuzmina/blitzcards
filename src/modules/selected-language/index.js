import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useCategories } from '../categories/state';
import Button from '../../components/button';
import NoItemsExist from '../../components/no-items-exist';
import AddNewCategoryModalWindow from '../add-new-category-modal-window';
import styles from './styles.module.scss';

const SelectedLanguage = () => {
  const { language } = useRouteMatch().params;
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const { categories } = useCategories();

  const filteredCategories = categories.filter(
    (category) => category.categoryBelongsToLanguage === language
  );

  return (
    <>
      {isNewCategoryModalOpen && (
        <AddNewCategoryModalWindow
          onClose={() => setNewCategoryModalOpen(false)}
          language={language}
        />
      )}
      {filteredCategories.length === 0 ? (
        <NoItemsExist
          title={`Let's create a new category for ${language} language!`}
          buttonText={'add new category'}
          onClick={() => setNewCategoryModalOpen(true)}
        />
      ) : (
        <>
          <div className={styles.selectedLanguageHeader}>
            <div className={styles.selectedLanguageTitle}>{language}</div>
            <Button
              text={'add new category'}
              className={styles.button}
              onClick={() => setNewCategoryModalOpen(true)}
            />
          </div>
          <div className={styles.content}>
            {filteredCategories.map((category, index) => (
              <NavLink
                to={`/language/${language}/${category.categoryName}`}
                key={index}
                className={styles.category}>
                {category.categoryName}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SelectedLanguage;
