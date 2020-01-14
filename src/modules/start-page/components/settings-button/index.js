import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import classname from 'classnames';
import styles from './styles.module.scss';

const SettingsButton = ({ activeClassName, onClick }) => {
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
