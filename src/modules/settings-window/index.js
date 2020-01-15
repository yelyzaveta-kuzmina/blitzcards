import React, { useState, useCallback } from 'react';
import { useTheming } from '../../state/theming';
import ColorPicker from '../../components/color-picker';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './styles.module.scss';

const SettingsWindow = () => {
  const [activeSetting, setActiveSetting] = useState(null);
  const { backgroundColor, textColor, setBackgroundColor, setTextColor } = useTheming();

  const onActiveSettingChange = useCallback(
    (setting) => {
      if (setting === activeSetting) {
        setActiveSetting(null);
        return;
      }
      setActiveSetting(setting);
    },
    [activeSetting]
  );

  return (
    <div className={styles.settingsWindow}>
      <div className={styles.left}>
        <div className={styles.colorPicker}>
          <span className={styles.propertyName}>Background color:</span>
          <div
            className={styles.colorPreview}
            style={{ backgroundColor: backgroundColor }}
            onClick={() => onActiveSettingChange('background-color')}
          />
        </div>
        <div className={styles.colorPicker}>
          <span className={styles.propertyName}>Text color:</span>
          <div
            className={styles.colorPreview}
            style={{ backgroundColor: textColor }}
            onClick={() => onActiveSettingChange('text-color')}
          />
        </div>
        <div className={styles.colorPicker}>
          <span className={styles.propertyName}>Display color:</span>
          <div
            className={styles.colorPreview}
            style={{ backgroundColor: backgroundColor }}
            onClick={() => onActiveSettingChange('display-color')}
          />
        </div>
        <div className={styles.colorPicker}>
          <span className={styles.propertyName}>Font scaling factor:</span>
          <div>1.2</div>
        </div>
      </div>
      <div className={styles.right}>
        <OutsideClickHandler onOutsideClick={() => setActiveSetting(null)}>
          {activeSetting === 'background-color' && (
            <ColorPicker color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
          )}
          {activeSetting === 'text-color' && (
            <ColorPicker color={textColor} onChange={({ hex }) => setTextColor(hex)} />
          )}
          {activeSetting === 'display-color' && (
            <ColorPicker color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default SettingsWindow;
