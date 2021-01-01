import classNames from 'classnames';
import styles from './styles.module.scss';

const SideMenu = ({ id, item, selectedItem, onClick }) => {
  return (
    <div
      id={id}
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
