import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import ColorPalette from '../../components/color-picker';

const ColorConfigurationView = ({
  backgroundColor,
  textColor,
  activeSetting,
  setActiveSetting,
  setBackgroundColor,
  setTextColor
}) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setActiveSetting(null)}>
      {activeSetting === 'background-color' && (
        <ColorPalette color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
      )}
      {activeSetting === 'text-color' && (
        <ColorPalette color={textColor} onChange={({ hex }) => setTextColor(hex)} />
      )}
      {activeSetting === 'display-color' && (
        <ColorPalette color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
      )}
    </OutsideClickHandler>
  );
};

export default ColorConfigurationView;
