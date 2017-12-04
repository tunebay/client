// @flow
import styled from 'styled-components'

import { media } from '../../lib/styleUtils'

export default styled.button`
  background-color: ${props => props.theme.primaryRed};
  color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};

  font-family: 'Roboto', sans-serif;

  border-radius: 6px;
  border: none;
  font-size: 1.4rem;
  height: 60px;
  letter-spacing: 1.2px;
  outline: none;
  padding: 0.25rem 1rem;
  width: 180px;
  transition: all 75 ease-out;

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
`
