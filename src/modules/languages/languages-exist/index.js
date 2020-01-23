import React from 'react';
import { useLanguages } from '../../../state/languages';
// import styles from './styles.module.scss';

const LanguagesExist = () => {
  const { languages } = useLanguages();

  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>{language.targetLanguage}</div>
      ))}
    </div>
  );
};

export default LanguagesExist;
