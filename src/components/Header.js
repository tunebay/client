// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import { Logo, NavLink } from './common'

type Props = {||}

export default class extends Component<Props, void> {
  render() {
    return (
      <Header>
        <Left>
          <Logo size={30} />
          <NavLink color="#111111" spacing="5rem">
            Home
          </NavLink>
          <NavLink color="#111111" spacing="5rem">
            Discover
          </NavLink>
        </Left>
        <Right>
          <NavLink color="#111111">Login</NavLink>
          <NavLink color="#111111">Create account</NavLink>
          <NavLink color="#E43D3C">Upload</NavLink>
        </Right>
      </Header>
    )
  }
}

const Header = styled.header`
  background-color: ${props => props.theme.white};
  /* Look into different shadow for header */
  box-shadow: ${props => props.theme.boxShadow};

  width: 100%;
  padding: 0 6rem;
  height: 6rem;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`

const Left = styled.nav`
  display: flex;
  align-items: center;
`

const Right = styled.nav`
  display: flex;
  align-items: center;
`
