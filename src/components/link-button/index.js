import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const LinkButton = ({ id, to, text, classNameButton, classNameText }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <button id={id} className={classNameButton} onClick={onClick}>
      <span className={classNameText}>{text}</span>
    </button>
  );
};

export default LinkButton;
