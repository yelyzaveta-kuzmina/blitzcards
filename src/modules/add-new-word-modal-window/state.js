import { useState } from 'react';
import uuid from 'uuid/v4';

const useNewWordModalWindow = ({ categoryId }) => {
  const [isNewWordModalOpen, setNewWordModalOpen] = useState(false);
  const [wordInputValues, setWordInputValues] = useState({ id: uuid() });

  const inputHandleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setWordInputValues({ ...wordInputValues, [name]: newValue, categoryId });
  };

  return {
    isNewWordModalOpen,
    setNewWordModalOpen,
    wordInputValues,
    setWordInputValues,
    inputHandleChange
  };
};

export default useNewWordModalWindow;
