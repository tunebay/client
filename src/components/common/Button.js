// @flow
import styled from 'styled-components'

import { media } from '../../lib/styleUtils'

export default styled.button`
  background-color: ${props => props.theme.primaryRed};
  color: ${props => props.theme.white};

  font-family: 'Roboto', sans-serif;

  border-radius: 6px;
  border: none;
  font-size: 1.4rem;
  height: 60px;
  letter-spacing: 1.2px;
  outline: none;
  padding: 0.25rem 1rem;
  width: 180px;

  &:hover {
    cursor: pointer;
  }

  ${media.phone`
    font-size: 1.6rem;
  `};
`
