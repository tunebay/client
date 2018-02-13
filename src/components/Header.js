// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { connect } from 'react-redux';

import { media } from '../lib/styleUtils';

import { Logo, NavLink } from './common';
import { Search } from './icons';
import { actions } from './AuthModal/state';

type Props = OwnProps & ActionProps;

type OwnProps = {|
  visible: boolean,
|};

type ActionProps = typeof actions;

class HeaderContainer extends Component<Props> {
  handleSearch = () => {
    console.log('submit form');
  };

  render() {
    const { visible, show } = this.props;

    if (!visible) return null;

    return (
      <Header>
        <Left>
          <Logo size={30} />
          <Link href="/">
            <NavLink color="#111111" spacing="5rem">
              Home
            </NavLink>
          </Link>
          <Link as="/mabel" href="/profile?username=mabel">
            <NavLink color="#111111" spacing="5rem">
              Discover
            </NavLink>
          </Link>
        </Left>
        <Middle>
          <SearchBar onSubmit={this.handleSearch} />
        </Middle>
        <Right>
          {/* <Link as="/hello" href="/profile?username=hello">
            <NavLink color="#111111">Login</NavLink>
          </Link> */}
          <LoginButton onClick={show}>Login</LoginButton>
          <Link href="/upload">
            <NavLink color="#E43D3C">Create account</NavLink>
          </Link>
        </Right>
      </Header>
    );
  }
}

const SearchBar = (props: { onSubmit: () => any }) => {
  const { onSubmit } = props;
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput placeholder="Search" />
      <Search />
    </SearchForm>
  );
};

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
  }
`;

const SearchForm = styled.form`
  padding-left: 5rem;
  display: flex;
  align-items: center;
  flex: 1;
`;

const SearchInput = styled.input`
  background-color: ${props => props.theme.lighterGrey};
  color: ${props => props.theme.black};
  height: 36px;
  border-radius: 5px;
  font-weight: 600;
  width: 55%;
  transition: all 200ms ease;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  margin-right: -3rem;

  outline: none;
  border: none;
  font-family: inherit;

  &::-webkit-input-placeholder {
    font-weight: 600;
    color: ${props => props.theme.darkGrey};
  }

  &:focus {
    width: 60%;
    &::-webkit-input-placeholder {
      color: ${props => props.theme.grey};
    }
  }

  ${media.break1`
    width: 100%;
    &:focus {
      width: 100%;
  `};
`;

const Header = styled.header`
  background-color: ${props => props.theme.white};
  /* Look into different shadow for header */
  box-shadow: ${props => props.theme.boxShadowFlat};
  height: ${props => props.theme.headerHeight};

  width: 100%;
  padding: 0 6rem;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

const Left = styled.nav`
  display: flex;
  align-items: center;
`;

const Middle = styled.div`
  flex: 1;
`;

const Right = styled.nav`
  display: flex;
  align-items: center;
`;

export default connect(null, actions)(HeaderContainer);
