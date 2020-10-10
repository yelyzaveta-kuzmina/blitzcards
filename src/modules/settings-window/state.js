import { useState, useCallback } from 'react';
import { useTheming } from '../../state/theming';

export const useLayoutSetting = () => {
  const [activeSetting, setActiveSetting] = useState(null);
  const {
    backgroundColor,
    textColor,
    displayColor,
    setBackgroundColor,
    setTextColor,
    setDisplayColor
  } = useTheming();

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
    displayColor,
    setActiveSetting,
    setBackgroundColor,
    setTextColor,
    setDisplayColor,
    onActiveSettingChange
  };
};
