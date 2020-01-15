import React from 'react';
import { useSettingsWindow } from './state';
import ColorConfigurationView from './color-configuration-view';
import styles from './styles.module.scss';

const SettingsWindow = () => {
  const {
    backgroundColor,
    textColor,
    activeSetting,
    setActiveSetting,
    setBackgroundColor,
    setTextColor,
    onActiveSettingChange
  } = useSettingsWindow();

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
        <ColorConfigurationView
          backgroundColor={backgroundColor}
          textColor={textColor}
          activeSetting={activeSetting}
          setActiveSetting={setActiveSetting}
          setBackgroundColor={setBackgroundColor}
          setTextColor={setTextColor}
        />
      </div>
    </div>
  );
};

export default SettingsWindow;
