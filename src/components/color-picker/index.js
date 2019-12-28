import React, { useCallback, useState } from 'react';
import { SketchPicker } from 'react-color';
import styles from './styles.module.scss';

const ColorPicker = ({ className, color, onChange }) => {
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const toggleColorPickerVisibility = useCallback(() => {
    setIsColorPickerVisible((visible) => !visible);
  }, []);

  return (
    <div className={className}>
      Color:&nbsp;
      <div
        className={styles.colorPreview}
        style={{ backgroundColor: color }}
        onClick={toggleColorPickerVisibility}
      />
      {isColorPickerVisible && (
        <SketchPicker className={styles.colorPickerContainer} color={color} onChange={onChange} />
      )}
    </div>
  );
};

export default ColorPicker;
