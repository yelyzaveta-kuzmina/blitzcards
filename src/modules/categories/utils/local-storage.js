import { safeParse } from '../../../utils/json';

export const persistCategory = (category) =>
  localStorage.setItem('category', JSON.stringify(category));

export const getPersistedCategory = () => {
  const json = localStorage.getItem('category');
  return safeParse(json, []);
};
