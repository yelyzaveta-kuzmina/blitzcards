import React from 'react';
import { createCategoryButtonText } from './constants';
import NewCategoryButton from '../../components/button';
import StartPageButton from '../../components/start-page-button';

const Categories = () => {
  return (
    <>
      <StartPageButton />
      <NewCategoryButton text={createCategoryButtonText} path="/new-category" />
    </>
  );
};

export default Categories;
