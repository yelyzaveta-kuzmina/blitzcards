import React from 'react';
import { useTheming } from '../../state/theming';
import ColorPicker from '../../components/color-picker';
import styles from './styles.module.scss';

const SettingsWindow = () => {
  const { backgroundColor, setBackgroundColor } = useTheming();

  return (
    <div className={styles.settingsWindow}>
      <ColorPicker
        className={styles.colorPicker}
        color={backgroundColor}
        onChange={({ hex }) => setBackgroundColor(hex)}
        name={'Background color'}
      />
      <ColorPicker
        className={styles.colorPicker}
        color={backgroundColor}
        onChange={({ hex }) => setBackgroundColor(hex)}
        name={'Display color'}
      />
      <ColorPicker
        className={styles.colorPicker}
        color={backgroundColor}
        onChange={({ hex }) => setBackgroundColor(hex)}
        name={'Text color'}
      />
    </div>
  );
};

export default SettingsWindow;
