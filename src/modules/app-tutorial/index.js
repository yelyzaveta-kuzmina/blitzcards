import Button from '../../components/button';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import styles from './styles.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppState } from '../../state';

const AppTutorial = ({ closeTutorial }) => {
  const { isAppTutorialShown, setAppTutorialVisibility } = useAppState();
  const [isWelcomeMessageShown, setWelcomeMessageVisibility] = useState(false);
  const [tutorial, setTutorial] = useState({
    run: false,
    stepIndex: 0,
    steps: []
  });

  const history = useHistory();

  const initStartPageTutorial = useCallback(() => {
    setWelcomeMessageVisibility(false);
    setTutorial({
      run: true,
      stepIndex: 0,
      steps: [
        {
          target: 'div',
          placement: 'right',
          title: "Here is the main page - let's discover!",
          disableBeacon: true,
          styles: {
            buttonNext: {
              color: '#7b7676',
              backgroundColor: 'transparent',
              borderRadius: 0,
              border: '1px solid hsl(0, 2.1%, 61.4%)',
              outline: 'none',
              fontVariant: 'small-caps',
              fontWeight: 300,
              '&:hover': {
                borderColor: 'red !important',
                transition: 'border-color linear 0.4s'
              }
            },
            buttonClose: {
              outline: 'none',
              color: 'transparent',
              pointerEvents: 'none'
            }
          }
        },
        {
          target: '#home-button',
          content: (
            <div>
              You can always come to the start page by clicking the button doesn't matter where you
              are currently 🏠 💛
            </div>
          ),
          placement: 'right',
          title: 'Home',
          disableBeacon: true,
          styles: {
            buttonNext: {
              color: '#7b7676',
              backgroundColor: 'transparent',
              borderRadius: 0,
              border: '1px solid hsl(0, 2.1%, 61.4%)',
              outline: 'none',
              fontVariant: 'small-caps',
              fontWeight: 300,
              '&:hover': {
                borderColor: 'red !important',
                transition: 'border-color linear 0.4s'
              }
            },
            buttonClose: {
              outline: 'none',
              color: 'transparent',
              pointerEvents: 'none'
            }
          }
        },
        {
          target: '#start-button',
          content: (
            <div>
              You can always come to the start page by clicking the button doesn't matter where you
              are currently 🏠 💛
            </div>
          ),
          placement: 'right',
          title: 'Starting point of our journey. Here we go :)',
          disableBeacon: true,
          styles: {
            buttonNext: {
              color: '#7b7676',
              backgroundColor: 'transparent',
              borderRadius: 0,
              border: '1px solid hsl(0, 2.1%, 61.4%)',
              outline: 'none',
              fontVariant: 'small-caps',
              fontWeight: 300,
              '&:hover': {
                borderColor: 'red !important',
                transition: 'border-color linear 0.4s'
              }
            },
            buttonClose: {
              outline: 'none',
              color: 'transparent',
              pointerEvents: 'none'
            }
          }
        },
        {
          target: '#settings-button',
          content: <div>Settings</div>,
          placement: 'left',
          title: 'Settings Settings Settings',
          disableBeacon: true,
          styles: {
            buttonNext: {
              color: '#7b7676',
              backgroundColor: 'transparent',
              borderRadius: 0,
              border: '1px solid hsl(0, 2.1%, 61.4%)',
              outline: 'none',
              fontVariant: 'small-caps',
              fontWeight: 300,
              '&:hover': {
                borderColor: 'red !important',
                transition: 'border-color linear 0.4s'
              }
            },
            buttonClose: {
              outline: 'none',
              color: 'transparent',
              pointerEvents: 'none'
            }
          }
        },
        {
          target: 'div'
        }
      ]
    });
  }, []);

  useEffect(() => {
    const url = window.location.href;

    if (isAppTutorialShown && !url.includes('settings')) {
      setWelcomeMessageVisibility(true);
    }

    if (url.includes('settings')) {
      initStartPageTutorial();
    }
  }, [isAppTutorialShown, initStartPageTutorial]);

  const handleJoyrideCallback = (data) => {
    const { action, index, type, status } = data;

    const stepIndex = index + (action === ACTIONS.PREV ? -1 : 1);

    if ([STATUS.PAUSED].includes(status)) {
      if (index === 4) {
        history.push('./settings');
        setAppTutorialVisibility(true);

        console.log('tutorialdss', tutorial);
        return;
      }
    }

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      if (index === 3) {
        console.log('1');
        setTutorial({ ...tutorial, stepIndex, run: false });
        console.log('tutorial', tutorial);
        return;
      }

      setTutorial({ ...tutorial, stepIndex });
    }
  };

  return (
    <>
      {isWelcomeMessageShown && (
        <div className={styles.mainWrapper}>
          <div className={styles.tutorialWrapper}>
            <button className={styles.skipButton} onClick={() => closeTutorial()}>
              Skip
            </button>
            <div className={styles.welcomeText}>Welcome on board!</div>
            <div className={styles.subText}>
              Great to see you using blitzcards! :) Make yourself familiar with the platform, see
              how effectively it can be used and get important information about storing the data.
            </div>
            <div className={styles.content}>
              <Button className={styles.button} text={'Start'} onClick={initStartPageTutorial} />
            </div>
          </div>
        </div>
      )}

      <Joyride
        callback={(opts) => handleJoyrideCallback(opts)}
        run={tutorial.run}
        steps={tutorial.steps}
        continuous={true}
        showProgress={true}
        disableCloseOnEsc={true}
        stepIndex={tutorial.stepIndex}
        styles={{
          options: {
            arrowColor: '#fff',
            backgroundColor: '#fff',
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#FAD164',
            textColor: '#7b7676',
            width: '30em'
          }
        }}
      />
    </>
  );
};

export default AppTutorial;
