import { safeParse } from './json';

// const createPersistColorFunction = (colorName) => (color) =>
//   localStorage.setItem(colorName, JSON.stringify(color));

// export const persistBackgroundColor = createPersistColorFunction('background-color');

export const persistBackgroundColor = (color) =>
  localStorage.setItem('background-color', JSON.stringify(color));

export const getPersistedBackgroundColor = () => {
  const json = localStorage.getItem('background-color');
  return safeParse(json);
};

export const persistTextColor = (color) =>
  localStorage.setItem('text-color', JSON.stringify(color));

export const getPersistedTextColor = () => {
  const json = localStorage.getItem('text-color');
  return safeParse(json);
};

export const persistDisplayColor = (color) =>
  localStorage.setItem('display-color', JSON.stringify(color));

export const getPersistedDisplayColor = () => {
  const json = localStorage.getItem('display-color');
  return safeParse(json);
};
