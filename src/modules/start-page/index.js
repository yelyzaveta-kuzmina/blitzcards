import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { useAppState } from '../../state';
import AppTutorial from '../app-tutorial';
import SettingsButton from './components/settings-button';
import MottoBox from './components/motto-box';
import LinkButton from '../../components/link-button';
import WelcomeMessage from '../app-tutorial/welcomeMessage';
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
  }, [isFirstVisit, setTutorialShown]);

  const onTutorialAccept = useCallback(() => {
    setTutorialAccepted(true);
    setWelcomeMessage(false);
    setTutorialShown(true);
  }, [setTutorialShown]);

  const onTutorialDecline = useCallback(() => {
    setTutorialAccepted(false);
    setWelcomeMessage(false);
    setIsFirstVisit(false);
  }, [setIsFirstVisit]);

  const onAppTutorialClose = useCallback(() => {
    setTutorialShown(false);
    setIsFirstVisit(false);
    setTutorialAccepted(false);
  }, [setTutorialShown, setIsFirstVisit]);

  return (
    <>
      {isWelcomeMessage && (
        <WelcomeMessage onTutorialAccept={onTutorialAccept} onTutorialDecline={onTutorialDecline} />
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
