import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import classname from 'classnames';
import styles from './styles.module.scss';

const SettingsButton = ({ to, activeClassName }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <div className={styles.icon}>
      <FontAwesomeIcon
        className={classname(activeClassName, styles.settings)}
        onClick={onClick}
        icon={faCog}
      />
    </div>
  );
};

export default SettingsButton;
