import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import ColorPicker from '../../components/color-picker';

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
        <ColorPicker color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
      )}
      {activeSetting === 'text-color' && (
        <ColorPicker color={textColor} onChange={({ hex }) => setTextColor(hex)} />
      )}
      {activeSetting === 'display-color' && (
        <ColorPicker color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
      )}
    </OutsideClickHandler>
  );
};

export default ColorConfigurationView;
