// @flow
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import theme from '../lib/theme'
import { media, boxShadow } from '../lib/styleUtils'
import { Button, NavLink, Logo } from '../components/common'

export default () => (
  <Hero>
    <Header>
      <Logo />
      <NavLinks>
        <Link href="#">
          <NavLink color={theme.primaryRed}>Create account</NavLink>
        </Link>
        <Link href="#">
          <NavLink color={theme.white}>Log in</NavLink>
        </Link>
      </NavLinks>
    </Header>
    <Shoutout>
      <Title>Directly support the music and artists you love.</Title>
      <Button onClick={() => console.log('Learn more')}>Learn more.</Button>
    </Shoutout>
    {/* media: phone only */}
    <MenuButton />
  </Hero>
)

const Hero = styled.div`
  position: relative;
  width: calc(100% - 6rem);
  height: 80vh;
  margin: auto;
  margin-top: 3rem;

  background-color: #1a1e28; // #1C1422
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
`

const NavLinks = styled.div`
  ${media.break3`
    display: none;
  `};
`

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;

  ${media.break3`
    padding: 3rem 3rem;
  `};
`

const Shoutout = styled.div`
  position: absolute;
  top: 25%;
  left: 8%;

  ${media.phone`
    left: 0;
    max-width: 100%;
    margin: auto;
    padding: 4rem;
  `};
`

const Title = styled.h1`
  font-weight: 900;
  color: #fff;
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
`

const MenuButton = styled.button`
  display: none;
  ${media.phone`
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
    ${boxShadow()};
  `};
`
