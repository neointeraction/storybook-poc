import styled, { css } from "styled-components";

export const Cell = styled.div(
  ({
    theme: {
      colors: { white },
      fontFamily: { base },
	  },
	  width = 1
    }) => css`
	grid-column-end: span 1;
  `
)