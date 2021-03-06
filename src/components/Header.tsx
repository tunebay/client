import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';

import styled from '../lib/theme';
import { media } from '../lib/styleUtils';

import { Logo, NavLink } from './common';
import { Search } from './icons';
import { actions } from './Modal/state';
import LoginForm from './forms/Login';
import SignupForm from './forms/Signup';
import gql from 'graphql-tag';

type Props = OwnProps & ActionProps;

interface OwnProps {
  visible: boolean;
}

type ActionProps = typeof actions;

class HeaderContainer extends Component<Props> {
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
          <Link href="/discover">
            <NavLink color="#111111" spacing="5rem">
              Discover
            </NavLink>
          </Link>
        </Left>
        <Middle>
          <SearchBar onSubmit={() => console.log('submitted')} />
        </Middle>
        <Query query={query}>
          {({ data, loading, error }) => {
            return (
              <Right>
                <LoginButton onClick={() => show(<LoginForm />)}>
                  Login
                </LoginButton>
                <SignupButton onClick={() => show(<SignupForm />)}>
                  Create Account
                </SignupButton>
              </Right>
            );
          }}
        </Query>
      </Header>
    );
  }
}

const SearchBar = (props: { onSubmit(): any }) => {
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

// TODO: unify buttons
const SignupButton = styled.button`
  color: ${props => props.theme.primaryRed};

  border: none;
  background-color: transparent;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 1.3rem;
  margin-left: 2rem;

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
    }
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

const query = gql`
  query {
    currentUser {
      id
      name
    }
  }
`;

export default connect(null, actions)(HeaderContainer);
