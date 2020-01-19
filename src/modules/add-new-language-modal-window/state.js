import { useState } from 'react';

export const useNewLanguageModalWindow = () => {
  const [isNewLanguageModalOpen, setNewLanguageModalOpen] = useState(false);

  return { isNewLanguageModalOpen, setNewLanguageModalOpen };
};

export default useNewLanguageModalWindow;
