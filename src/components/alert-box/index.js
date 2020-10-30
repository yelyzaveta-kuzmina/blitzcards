import CloseButton from '../../components/close-button';
import styles from './styles.module.scss';

const AlertBox = ({ text, onApprove, onDecline, onModalClose }) => {
  return (
    <div className={styles.alertBoxWrapper}>
      <CloseButton className={styles.closeButton} onClick={onModalClose} />
      <div className={styles.text}>{text}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onApprove}>
          Yes
        </button>
        <button className={styles.button} onClick={onDecline}>
          No
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
