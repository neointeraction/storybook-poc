import styled, { css } from "styled-components";

export const GridWrapper = styled.div(
  ({
    theme: {
      colors: { white },
      fontFamily: { base },
    },
    backgroundColor,
    gap,
    alignContent,
    textAlign,
    justifyContent,
    height,
    columns = 3
  }) => css`  
    display:grid;
    background-color:${white};
    grid-gap: ${gap ? gap : '12px'};
    grid-auto-flow:'row';
    grid-template-columns: ${columns && `repeat(${columns}, 1fr )` };
    align-content:${alignContent ? alignContent : ''};
    text-align:${textAlign ? textAlign : ''};
    justify-content:${justifyContent ? justifyContent: 'left'};
    height:${height ? height: '50px'};     
  `
)
