import styles from './styles.module.scss';

const PlayingCard = ({ children, className }) => {
  return (
    <div className={styles.playingCard}>
      <div className={className}>{children}</div>
    </div>
  );
};

export default PlayingCard;
