import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {
  return <SketchPicker width={'20em'} color={color} onChange={onChange} />;
};

export default ColorPicker;
