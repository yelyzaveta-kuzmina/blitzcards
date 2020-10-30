import ClassName from 'classnames';
import styles from './styles.module.scss';

const CloseButton = ({ className, onClick }) => {
  return (
    <div className={ClassName(styles.closeButton, className)} onClick={onClick}>
      &times;
    </div>
  );
};

export default CloseButton;
