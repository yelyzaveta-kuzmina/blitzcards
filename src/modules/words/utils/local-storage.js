import { safeParse } from '../../../utils/json';

export const persistWord = (word) => localStorage.setItem('word', JSON.stringify(word));

export const getPersistedWord = () => {
  const json = localStorage.getItem('word');
  return safeParse(json, []);
};
