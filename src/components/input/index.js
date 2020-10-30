import styles from './styles.module.scss';

const Input = ({ placeholder, name, maxLength, onChange }) => {
  return (
    <label htmlFor={name} className={styles.inputWrapper}>
      <input
        className={styles.input}
        autoComplete="off"
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
