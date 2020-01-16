import React from 'react';
import { useSettingsWindow } from './state';
import ColorPickerBlock from '../../components/color-picker-block';
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
        <ColorPickerBlock
          propertyName={'Background color'}
          style={{ backgroundColor: backgroundColor }}
          onClick={() => onActiveSettingChange('background-color')}
        />
        <ColorPickerBlock
          propertyName={'Text color'}
          style={{ backgroundColor: textColor }}
          onClick={() => onActiveSettingChange('text-color')}
        />
        <ColorPickerBlock
          propertyName={'Display color'}
          style={{ backgroundColor: backgroundColor }}
          onClick={() => onActiveSettingChange('display-color')}
        />
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
