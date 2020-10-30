import Button from '../../button';
import styles from './styles.module.scss';

const ItemsExist = ({ title, buttonText, onClick, children }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <Button text={buttonText} className={styles.button} onClick={onClick} />
      </div>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default ItemsExist;
