// @flow
import styled from 'styled-components'

export default styled.button`
  background-color: ${props => props.theme.primaryRed};

  border-radius: 6px;
  border: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  height: 6rem;
  letter-spacing: 1.2px;
  outline: none;
  padding: 0.25rem 1rem;
  width: 18rem;

  &:hover {
    cursor: pointer;
  }
`
