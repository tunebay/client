// @flow
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import theme from '../lib/theme';
import { media } from '../lib/styleUtils';
import { Button, NavLink, Logo } from '../components/common';

import ProfileLink from './ProfileLink';

export default () => (
  <Hero>
    <Nav>
      <Logo size={36} />
      <NavLinks>
        <ProfileLink username="taya">
          <NavLink color={theme.white}>Log in</NavLink>
        </ProfileLink>
        <Link href="#">
          <NavLink color={theme.primaryRed}>Create account</NavLink>
        </Link>
      </NavLinks>
    </Nav>
    <Shoutout>
      <Title>Directly support the music and artists you love.</Title>
      <Button
        onClick={() => {
          console.log('CLICKED');
        }}
      >
        Learn more.
      </Button>
    </Shoutout>
    {/* media: phone only */}
    <MenuButton />
  </Hero>
);

const Hero = styled.header`
  background-color: ${props => props.theme.deepBlue};

  margin: 3rem auto;
  height: 80vh;

  position: relative;

  width: calc(100% - 6rem);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  ${media.break1`
    width: 100%;
    margin-top: 0;
  `};

  ${media.break2`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  `};

  ${media.break3`
    height: 75vh;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  `};
`;

const NavLinks = styled.div`
  ${media.break3`
    display: none;
  `};
`;

const Nav = styled.nav`
  width: 100%;
  padding: 3rem 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.break3`
    padding: 3rem 3rem;
  `};
`;

const Shoutout = styled.div`
  top: 25%;
  left: 8%;

  position: absolute;

  ${media.phone`
    left: 0;
    max-width: 100%;
    margin: auto;
    padding: 4rem;
  `};
`;

const Title = styled.h1`
  color: ${props => props.theme.white};

  font-weight: 900;
  font-size: 6rem;
  max-width: 50rem;
  padding-bottom: 3rem;
  letter-spacing: 3px;

  ${media.break2`
    font-size: 5.5rem;
  `};

  ${media.break3`
    font-size: 5rem;
  `};

  ${media.break4`
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.2;
  `};
`;

const MenuButton = styled.button`
  display: none;

  ${media.phone`
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.white};
    display: block;
    top: 3rem;
    right: 3rem;
    position: fixed;
    height: 40px;
    width: 40px;
    border: none;
    outline: none;
    border-radius: 500px;
  `};
`;
