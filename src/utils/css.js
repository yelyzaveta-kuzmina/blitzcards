export const setCssVariable = (variableName, value) => {
  if (!value) {
    return;
  }
  document.documentElement.style.setProperty(variableName, value);
};
