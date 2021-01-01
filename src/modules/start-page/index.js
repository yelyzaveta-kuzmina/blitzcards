import { useEffect, useCallback } from 'react';
import { useAppState } from '../../state';
import SettingsButton from './components/settings-button';
import MottoBox from './components/motto-box';
import LinkButton from '../../components/link-button';
import AppTutorial from '../app-tutorial';
import styles from './styles.module.scss';

const StartPage = () => {
  const { isAppTutorialShown, setAppTutorialVisibility } = useAppState();

  useEffect(() => {
    const visitCount = window.localStorage.getItem('isFirstVisit');

    if (!visitCount) {
      window.localStorage.setItem('isFirstVisit', 1);
      setAppTutorialVisibility(true);
    }
  }, [setAppTutorialVisibility]);

  const onTutorialClose = useCallback(() => {
    setAppTutorialVisibility(false);
  }, [setAppTutorialVisibility]);

  console.log(isAppTutorialShown);
  return (
    <>
      {isAppTutorialShown && (
        <AppTutorial closeTutorial={onTutorialClose} isAppTutorialShown={isAppTutorialShown} />
      )}
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
  );
};

export default StartPage;
