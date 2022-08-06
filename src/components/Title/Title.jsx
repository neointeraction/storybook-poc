import React from 'react';
import { H1, H2 } from './Title.styles';
import PropTypes from 'prop-types';
import { TITLE_LEVELS } from 'src/data/constants';

const Title = ({ level, children }) => {
  if (level === TITLE_LEVELS.LEVEL1) {
    return (<H1>{children}</H1>);
  } else if (level === TITLE_LEVELS.LEVEL2) {
    return (<H2>{children}</H2>);
  }
};

export default Title;

Title.propTypes = {
  level: PropTypes.oneOf(Object.values(TITLE_LEVELS)),
  children: PropTypes.node
};

Title.defaultProps = {
  level: TITLE_LEVELS.LEVEL1
};
