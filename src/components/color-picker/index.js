import React, { useCallback, useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './styles.module.scss';

const ColorPicker = ({ className, color, onChange, name }) => {
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  const toggleColorPickerVisibility = useCallback(() => {
    setIsColorPickerVisible((visible) => !visible);
  }, []);

  const closeColorPicker = useCallback(() => {
    setIsColorPickerVisible(false);
  }, []);

  return (
    <div className={className}>
      {name}:
      <OutsideClickHandler onOutsideClick={() => closeColorPicker()}>
        <div
          className={styles.colorPreview}
          style={{ backgroundColor: color }}
          onClick={toggleColorPickerVisibility}
        />
        {isColorPickerVisible && (
          <SketchPicker
            disabled={true}
            className={styles.colorPickerContainer}
            color={color}
            onChange={onChange}
          />
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default ColorPicker;
