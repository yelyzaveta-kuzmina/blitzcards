import React from 'react';
import Button from '../../../../components/button';

const AddNewLanguageButton = ({ className, onClick }) => {
  return <Button text={'add new language'} className={className} onClick={onClick} />;
};

export default AddNewLanguageButton;
