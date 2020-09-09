import React from 'react';
import styles from './styles.module.scss';

const SideMenu = ({ item }) => {
  console.log(item.label);
  return <div className={styles.tab}>{item.label}</div>;
};
export default SideMenu;
