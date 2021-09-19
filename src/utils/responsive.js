import { css } from 'styled-components';

export const tablet = (props) => css`
  @media only screen and (max-width: 768px) {
    ${props}
  }
`;

export const mobile = (props) => css`
  @media only screen and (max-width: 450px) {
    ${props}
  }
`;
