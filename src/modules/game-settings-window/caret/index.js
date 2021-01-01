import { useAppState } from '../../../state';
import { caretOptions } from '../../../utils/carets';
import AppTutorial from '../../app-tutorial';
import CaretOptionsWrapper from '../caret-options-wrapper';
import styles from './styles.module.scss';

const CaretSetting = () => {
  const { caretIndex, setSubmittedCaret, submittedCaret, isAppTutorialShown } = useAppState();

  const onCaretSubmit = (caret) => {
    setSubmittedCaret(caret);
  };

  return (
    <>
      {isAppTutorialShown && <AppTutorial isAppTutorialShown={isAppTutorialShown} />}
      <div className={styles.settingDetail}>
        <CaretOptionsWrapper
          options={caretOptions}
          caretIndex={caretIndex}
          submittedCaret={submittedCaret}
          onCaretSubmit={onCaretSubmit}
        />
      </div>
    </>
  );
};

export default CaretSetting;
