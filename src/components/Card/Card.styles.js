import styled, { css } from 'styled-components';

export const CardWrapper = styled.div(({
    theme: {
    colors: { white },
    spacing:{sp2},
    borderRadius:{r2}
    },
    bgColor,
    width='auto',
    height='auto',
    radius
})=>css`
    background-color: ${bgColor?bgColor:white};
    position: relative;
    width: ${width};
    height: ${height};
    padding:${sp2};
    border-radius: ${radius?radius:r2};
    border: 1px solid rgba(27, 27, 27, 0.4);
    box-shadow: -8px -8px 12px rgba(0, 0, 0, 0.04), 8px 8px 12px rgba(0, 0, 0, 0.04);
`)