import OutsideClickHandler from 'react-outside-click-handler';
import { SketchPicker } from 'react-color';

const ColorConfigurationView = ({
  backgroundColor,
  textColor,
  displayColor,
  setBackgroundColor,
  setTextColor,
  setDisplayColor,
  activeSetting,
  setActiveSetting
}) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setActiveSetting(null)}>
      {activeSetting === 'background-color' && (
        <SketchPicker
          width={'20em'}
          color={backgroundColor}
          onChange={({ hex }) => setBackgroundColor(hex)}
        />
      )}
      {activeSetting === 'text-color' && (
        <SketchPicker width={'20em'} color={textColor} onChange={({ hex }) => setTextColor(hex)} />
      )}
      {activeSetting === 'display-color' && (
        <SketchPicker
          width={'20em'}
          color={displayColor}
          onChange={({ hex }) => setDisplayColor(hex)}
        />
      )}
    </OutsideClickHandler>
  );
};

export default ColorConfigurationView;
