import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button(
  ({
    theme: {
      colors: { black },
      fontFamily: { base },
    },
    size,
    primary,
  }) => css`
    color: ${black};
    font-family: ${base};
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    ${size == "sm" && `font-size: 12px;
     padding: 10px 16px;`}
    ${size == "md" &&
    ` font-size: 14px;
          padding: 11px 20px; `} 
        ${size == "lg" &&
    `
            font-size: 16px;
            padding: 12px 24px;
        `}
    ${primary
      ? `color: white !important;
            background-color: #1ea7fd;
        `
      : `
            background-color: #fff;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}
  `
);
