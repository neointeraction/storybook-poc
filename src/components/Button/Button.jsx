import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';
import { SIZE } from 'src/data/constants';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <ButtonWrapper
      type="button"
      style={backgroundColor && { backgroundColor }}
      size={size}
      primary={primary}
      {...props}
    >
      {label}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: SIZE.MEDIUM,
  onClick: undefined
};
