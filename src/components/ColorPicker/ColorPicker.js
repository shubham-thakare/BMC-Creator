import React from 'react';
import PropTypes from 'prop-types';
import { ColorPickerWrapper } from './styles/ColorPicker.style';

const ColorPicker = ({ label, ...props }) => {
  return (
    <>
      <label for="colorwell">
        <b>{label}</b>
      </label>
      <ColorPickerWrapper {...props} list="true" name="colorwell" />
    </>
  );
};

ColorPicker.propTypes = {
  label: PropTypes.string,
};

export default ColorPicker;
