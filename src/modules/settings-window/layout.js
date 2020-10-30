import { useLayoutSetting } from './state';
import ColorPickerBlock from './components/color-picker-block';
import ColorConfigurationView from './color-configuration-view';
import styles from './styles.module.scss';

const LayoutSetting = () => {
  const {
    backgroundColor,
    textColor,
    displayColor,
    activeSetting,
    setActiveSetting,
    setBackgroundColor,
    setTextColor,
    setDisplayColor,
    onActiveSettingChange
  } = useLayoutSetting();

  return (
    <div className={styles.settingsWindow}>
      <div className={styles.left}>
        <ColorPickerBlock
          className={styles.backgroundColorPreview}
          propertyName={'Background color'}
          style={{ backgroundColor: backgroundColor }}
          onClick={() => onActiveSettingChange('background-color')}
        />
        <ColorPickerBlock
          className={styles.displayColorPreview}
          propertyName={'Display color'}
          style={{ backgroundColor: displayColor }}
          onClick={() => onActiveSettingChange('display-color')}
        />
        <ColorPickerBlock
          className={styles.textColorPreview}
          propertyName={'Text color'}
          style={{ backgroundColor: textColor }}
          onClick={() => onActiveSettingChange('text-color')}
        />
      </div>
      <div className={styles.right}>
        <ColorConfigurationView
          backgroundColor={backgroundColor}
          textColor={textColor}
          displayColor={displayColor}
          activeSetting={activeSetting}
          setActiveSetting={setActiveSetting}
          setBackgroundColor={setBackgroundColor}
          setTextColor={setTextColor}
          setDisplayColor={setDisplayColor}
        />
      </div>
    </div>
  );
};

export default LayoutSetting;
