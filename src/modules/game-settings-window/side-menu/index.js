import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const SideMenu = ({ item, selectedItem, onClick }) => {
  return (
    <div
      className={
        item.label === selectedItem
          ? classNames(styles.sideTab, styles.sideTabActive)
          : styles.sideTab
      }
      onClick={onClick}>
      {item.label}
    </div>
  );
};
export default SideMenu;
