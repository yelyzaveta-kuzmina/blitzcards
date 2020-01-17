import React from 'react';
import { TitleText, SubtitleText, StartButtonText } from './constants';
import SettingsButton from './components/settings-button';
import MottoBox from './components/motto-box';
import LinkButton from '../../components/link-button';
import styles from './styles.module.scss';

const StartPage = () => {
  return (
    <>
      <SettingsButton />
      <div className={styles.content}>
        <MottoBox title={TitleText} subtitle={SubtitleText} />
        <LinkButton text={StartButtonText} to="./languages" />
      </div>
    </>
  );
};

export default StartPage;
