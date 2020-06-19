import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const ToNextStepButton = ({ onClick, className }) => {
  return <FontAwesomeIcon className={className} onClick={onClick} icon={faArrowAltCircleRight} />;
};

export default ToNextStepButton;
