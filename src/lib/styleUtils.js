// @flow
import { css, keyframes } from 'styled-components';

export const truncate = (width: string) => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const sizes = {
  giant: 1800,
  desktop: 1300,
  medium: 1130,
  tablet: 900,
  phone: 600,

  break1: 1200,
  break2: 993,
  break3: 760,
  break4: 600,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args: Array<any>) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const aspectRatio = (percent: string) => `
  &::before {
    content: '';
    display: block;
    padding-top: ${percent};
  }
`;

export const float = () => keyframes`
  0% {
    transform: translateY(0px);
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.1);
  }
  100% {
    box-shadow: 0 4px 28px 0 rgba(0,0,0,0.08);
    transform: translateY(-3px);
  }
`;
