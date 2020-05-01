import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const LinkButton = ({ to, text, classNameButton, classNameText }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <button className={classNameButton} onClick={onClick}>
      <span className={classNameText}>{text}</span>
    </button>
  );
};

export default LinkButton;
