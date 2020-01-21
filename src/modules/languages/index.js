import React from 'react';
import { useAppState } from '../../state';
import NoLanguagesExist from './no-languages-exist';

const Languages = () => {
  const { languages } = useAppState();

  if (languages.length === 0) {
    return <NoLanguagesExist />;
  }
  return null;
};

export default Languages;
