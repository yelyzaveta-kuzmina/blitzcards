import { useLocalStorage } from 'react-use';
import { useAppState } from '../../state';
import AppTutorial from '../app-tutorial';
import SettingsButton from './components/settings-button';
import MottoBox from './components/motto-box';
import LinkButton from '../../components/link-button';
import styles from './styles.module.scss';

const StartPage = () => {
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage('isFirstVisit', true);
  const { isTutorialShown, setTutorialShown } = useAppState();

  if (isFirstVisit) {
    setTutorialShown(true);
  }

  return (
    <>
      {isTutorialShown && <AppTutorial />}
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
