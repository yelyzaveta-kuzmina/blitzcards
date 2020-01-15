import { useState, useCallback } from 'react';
import { useTheming } from '../../state/theming';

export const useSettingsWindow = () => {
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

  return {
    activeSetting,
    backgroundColor,
    textColor,
    setActiveSetting,
    setBackgroundColor,
    setTextColor,
    onActiveSettingChange
  };
};
