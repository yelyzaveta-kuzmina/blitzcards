import classNames from 'classnames';
import styles from './styles.module.scss';

const CaretOptionsWrapper = ({ options, submittedCaret, onCaretSubmit }) => {
  return (
    <div className={styles.caretsWrapper}>
      {options.map((option, index) => {
        const isSubmitted = submittedCaret === option;

        return (
          <span
            key={index}
            className={isSubmitted ? classNames(styles.submitted, styles.caret) : styles.caret}
            onClick={() => onCaretSubmit(options[index])}>
            {option}
          </span>
        );
      })}
    </div>
  );
};

export default CaretOptionsWrapper;
