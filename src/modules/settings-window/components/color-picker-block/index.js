import React from 'react';
import ClassName from 'classnames';
import styles from './styles.module.scss';

const ColorPickerBlock = ({ className, propertyName, style, onClick }) => {
  return (
    <div className={styles.colorPicker}>
      <span className={styles.propertyName}>{propertyName}:</span>
      <div className={ClassName(styles.colorPreview, className)} style={style} onClick={onClick} />
    </div>
  );
};

export default ColorPickerBlock;
