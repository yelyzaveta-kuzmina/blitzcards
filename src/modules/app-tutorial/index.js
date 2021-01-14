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
      <div className={styles.title}>{currentStepContent.title}</div>
      <div className={styles.details}>
        <div className={styles.description}>{currentStepContent.description}</div>
        <img className={styles.image} src={currentStepContent.pic} alt="" />
      </div>
      <ToNextStepButton className={styles.next} onClick={onHandleNextStep} />
    </div>
  );
};

export default AppTutorial;