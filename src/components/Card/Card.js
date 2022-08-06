import React from 'react'
import {CardWrapper} from './Card.styles';
import PropTypes from 'prop-types';

const Card = ({
    children, ...props
}) => {
  return (
    <CardWrapper {...props}>{children}</CardWrapper>
  )
}

export default Card


Card.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    radius: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
  };
  
  Card.defaultProps = {
  };
  