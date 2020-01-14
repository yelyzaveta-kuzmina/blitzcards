import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import classNames from 'classnames';
import LightningIcon from './lightning';
import styles from './styles.module.scss';

const StartPageButton = ({ className }) => {
  return (
    <Link exact to="/">
      <div className={classNames(styles.button, className)}>
        <div className={styles.lightning}>
          <LightningIcon />
        </div>
      </div>
    </Link>
  );
};

export default StartPageButton;
