import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useCategories } from '../categories/state';
import AddNewCategoryModalWindow from '../add-new-category-modal-window';
import Button from '../../components/button';
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
          <div key={index}>{category.categoryName}</div>
        ))}
      </div>
    </>
  );
};

export default SelectedLanguage;
