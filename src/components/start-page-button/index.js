import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import LightningIcon from './lightning';
import classNames from 'classnames';
import styles from './styles.module.scss';

const StartPageButton = ({ to, className }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <div className={classNames(styles.button, className)}>
      <div onClick={onClick}>
        <LightningIcon />
      </div>
    </div>
  );
};

export default StartPageButton;
