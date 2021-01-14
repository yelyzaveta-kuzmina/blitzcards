import { useState, useCallback } from 'react';
import tutorialSteps from './tutorialSteps';
import ToNextStepButton from '../../components/to-next-step-button';
import styles from './styles.module.scss';

const AppTutorial = ({ onAppTutorialClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentStepContent, setCurrentStepContent] = useState(tutorialSteps[currentStepIndex]);

  console.log(currentStepIndex);
  console.log(currentStepContent);

  const onHandleNextStep = useCallback(() => {
    if (currentStepIndex + 1 === tutorialSteps.length) {
      onAppTutorialClose();
      alert('finish');
      return;
    }
    setCurrentStepIndex(currentStepIndex + 1);
    setCurrentStepContent(tutorialSteps[currentStepIndex + 1]);
  }, [currentStepIndex, setCurrentStepContent, onAppTutorialClose]);

  return (
    <div className={styles.tutorialWrapper}>
      <div>{currentStepContent.title}</div>
      <div>{currentStepContent.description}</div>
      <img style={{ width: 500 }} src={currentStepContent.pic} alt="" />
      <ToNextStepButton className={styles.next} onClick={onHandleNextStep} />
    </div>
  );
};

export default AppTutorial;
