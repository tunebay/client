// @flow
import styled from 'styled-components'

export default styled.button`
  background-color: ${props => props.theme.primaryRed};

  height: 6rem;
  width: 18rem;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1.2px;
  transition: all 100ms ease;
  padding: 0.25rem 1rem;

  &:hover {
    cursor: pointer;
  }
`
