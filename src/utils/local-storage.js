import { safeParse } from './json';

export const persistBackgroundColor = (color) =>
  localStorage.setItem('background-color', JSON.stringify(color));

export const getPersistedBackgroundColor = () => {
  const json = localStorage.getItem('background-color');
  return safeParse(json, []);
};
