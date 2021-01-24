import Button from '../../components/button';
import styles from './styles.module.scss';

const WelcomeMessage = ({ onTutorialAccept, onTutorialDecline }) => {
  return (
    <div className={styles.welcomeMessageWrapper}>
      <span className={styles.welcomeMessage}>
        Happy to see you using <b>blitzcards</b> - hope you will enjoy.
      </span>
      <span className={styles.welcomeMessage}>
        There is a small optional, but recommended app tutorial to go through 🙂
      </span>
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={onTutorialAccept} text={'Accept'} />
        <Button className={styles.button} onClick={onTutorialDecline} text={'Decline'} />
      </div>
    </div>
  );
};

export default WelcomeMessage;
