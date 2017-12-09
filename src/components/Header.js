// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter, type $Router } from 'next/router'

import { media } from '../lib/styleUtils'

import { Logo, NavLink } from './common'
import { Search } from './svgs'

type Props = {|
  router: $Router,
|}

export default withRouter(
  class extends Component<Props, void> {
    handleSearch = e => {
      e.preventDefault()
      console.log('submit form')
    }

    render() {
      if (this.props.router.pathname === '/') return null

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
          <Middle>
            <SearchBar onSubmit={this.handleSearch} />
          </Middle>
          <Right>
            <NavLink color="#111111">Login</NavLink>
            <NavLink color="#E43D3C">Create account</NavLink>
          </Right>
        </Header>
      )
    }
  },
)

const SearchBar = (props: { onSubmit: () => any }) => {
  const { onSubmit } = props
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput placeholder="Search" />
      <Search />
    </SearchForm>
  )
}

const SearchForm = styled.form`
  padding-left: 5rem;
  display: flex;
  align-items: center;
  flex: 1;
`

const SearchInput = styled.input`
  background-color: ${props => props.theme.lightestGrey};
  color: ${props => props.theme.black};
  height: 36px;
  border-radius: 5px;
  font-weight: 400;
  width: 55%;
  transition: all 200ms ease;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  margin-right: -3rem;

  outline: none;
  border: none;
  font-family: inherit;

  &::-webkit-input-placeholder {
    font-weight: 400;
    color: ${props => props.theme.lightGrey};
  }

  &:focus {
    width: 60%;
    &::-webkit-input-placeholder {
      color: ${props => props.theme.lighterGrey};
    }
  }

  ${media.break1`
    width: 100%;
    &:focus {
      width: 100%;
  `};
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
  display: flex;
  align-items: center;
`

const Middle = styled.div`
  flex: 1;
`

const Right = styled.nav`
  display: flex;
  align-items: center;
`
