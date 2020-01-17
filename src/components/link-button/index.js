import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

const LinkButton = ({ to, text }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default LinkButton;
