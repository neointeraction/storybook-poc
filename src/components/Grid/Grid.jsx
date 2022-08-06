import React from 'react';
import PropTypes from 'prop-types';
import { GridWrapper } from './Grid.styles';

export const Grid = ({ backgroundColor, gap, alignContent, justifyContent,  height, columns, ...props }) => {
  return (
    <GridWrapper
      alignContent={alignContent }
      gap={gap}
      justifyContent={justifyContent}
      height={height}
      columns={columns}      
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
    </GridWrapper>
  );
};

Grid.propTypes = {
  backgroundColor: PropTypes.string,
  columns: PropTypes.number
};

Grid.defaultProps = {
  backgroundColor: null,
  columns: 2
};
