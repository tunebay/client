// @flow
import styled from 'styled-components';

import { media } from '../../lib/styleUtils';

export default styled.button`
  background-color: ${props => props.theme.primaryRed};
  color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};

  border-radius: 6px;
  border: none;
  font-size: 1.4rem;
  height: 6rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  outline: none;
  padding: 0;
  width: 180px;
  transition: all 75ms ease-out;

  font-family: inherit;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkRed};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }

  ${media.phone`
    font-size: 1.6rem;
  `};
`;
