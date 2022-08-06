import React from 'react';
import PropTypes from 'prop-types';
import { GridWrapper } from './Grid.styles';
import { TEXTALIGN } from 'src/data/constants';

export const Grid = ({ backgroundColor, gap, alignContent, justifyContent, textAlign, height, columns, ...props }) => {
  return (
    <GridWrapper
      alignContent={alignContent}
      textAlign={textAlign}
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
  columns: PropTypes.number,
  textAlign: PropTypes.oneOf(Object.values(TEXTALIGN)),
};

Grid.defaultProps = {
  backgroundColor: null,
  columns: 3,
  textAlign:'center'
};
