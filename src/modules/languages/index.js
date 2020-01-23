import React from 'react';
import { useLanguages } from '../../state/languages';
import NoLanguagesExist from './no-languages-exist';
import LanguagesExist from './languages-exist';

const Languages = () => {
  const { languages } = useLanguages();

  if (languages.length === 0) {
    return <NoLanguagesExist />;
  }

  return <LanguagesExist />;
};

export default Languages;
