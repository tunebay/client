// @flow
import styled from 'styled-components'

export default styled.div`
  max-width: ${props => (props.width ? `${props.width / 10}rem` : '123rem')};

  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
