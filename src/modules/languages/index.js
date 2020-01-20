import React from 'react';
import { useAppState } from '../../state';
import NoLanguagesExist from './no-languages-exist';

const Languages = () => {
  const { languages } = useAppState();

  if (!languages) {
    return <NoLanguagesExist />;
  }
  return;
};

export default Languages;
