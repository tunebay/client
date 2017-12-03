// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {|
  children: React.Node,

  color: string,
|}

const NavLink = styled.a`
  color: ${props => props.color};
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 3rem;

  &:hover {
    cursor: pointer;
  }
`

export default (props: Props) => <NavLink {...props} />