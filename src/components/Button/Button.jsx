import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';
import { SIZE } from 'src/data/constants';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <ButtonWrapper
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
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
