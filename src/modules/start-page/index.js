import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { useAppState } from '../../state';
import AppTutorial from '../app-tutorial';
import SettingsButton from './components/settings-button';
import MottoBox from './components/motto-box';
import LinkButton from '../../components/link-button';
import styles from './styles.module.scss';

const StartPage = () => {
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage('isFirstVisit', true);
  const [isWelcomeMessage, setWelcomeMessage] = useState(false);
  const [isTutorialAccepted, setTutorialAccepted] = useState(false);

  const { isTutorialShown, setTutorialShown } = useAppState();

  useEffect(() => {
    if (isFirstVisit) {
      setWelcomeMessage(true);
    }
  }, []);

  const onAppTutorialClose = () => {
    setTutorialShown(false);
    setIsFirstVisit(false);
  };

  return (
    <>
      {isWelcomeMessage && (
        <div>
          Hi
          <button
            onClick={() => {
              setTutorialAccepted(true);
              setWelcomeMessage(false);
              setTutorialShown(true);
            }}>
            Accept
          </button>
          <button
            onClick={() => {
              setTutorialAccepted(false);
              setWelcomeMessage(false);
              setIsFirstVisit(false);
            }}>
            Decline
          </button>
        </div>
      )}
      {isTutorialAccepted && <AppTutorial onAppTutorialClose={onAppTutorialClose} />}
      {!isTutorialShown && !isWelcomeMessage && (
        <>
          <SettingsButton to="/settings" />
          <div className={styles.content}>
            <MottoBox title={'discover, store, memorize!'} subtitle={'Learn new words every day'} />
            <LinkButton
              to="./languages"
              text={'start'}
              classNameButton={styles.button}
              classNameText={styles.text}
            />
          </div>
        </>
      )}
    </>
  );
};

export default StartPage;
