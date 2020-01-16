import React from 'react';
import styles from './styles.module.scss';

const ColorPickerBlock = ({ propertyName, style, onClick }) => {
  return (
    <div className={styles.colorPicker}>
      <span className={styles.propertyName}>{propertyName}:</span>
      <div className={styles.colorPreview} style={style} onClick={onClick} />
    </div>
  );
};

export default ColorPickerBlock;
