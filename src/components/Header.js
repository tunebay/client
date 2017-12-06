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
          <Search>
            <SearchInput placeholder="Search" />
          </Search>
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

const Search = styled.form`
  padding-left: 5rem;
  flex: 1;
`

const SearchInput = styled.input`
  background-color: ${props => props.theme.lightestGrey};
  height: 36px;
  border-radius: 5px;
  width: 55%;
  transition: all 200ms ease;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  outline: none;
  border: none;
  font-family: inherit;

  &:focus {
    width: 65%;
  }
`

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
  flex: 1;
  display: flex;
  align-items: center;
`

const Right = styled.nav`
  display: flex;
  align-items: center;
`
