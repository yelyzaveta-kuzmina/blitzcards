import { safeParse } from '../../../utils/json';

export const persistLanguage = (language) =>
  localStorage.setItem('language', JSON.stringify(language));

export const getPersistedLanguage = () => {
  const json = localStorage.getItem('language');
  return safeParse(json, []);
};
