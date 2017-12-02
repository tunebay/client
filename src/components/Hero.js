// @flow
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import theme from '../lib/theme'
import { Button, NavLink, Logo } from '../components/common'

export default () => (
  <Hero>
    <Header>
      <Logo />
      <div>
        <Link href="#">
          <NavLink color={theme.primaryRed}>Create account</NavLink>
        </Link>
        <Link href="#">
          <NavLink color={theme.white}>Log in</NavLink>
        </Link>
      </div>
    </Header>
    <Shoutout>
      <Title>Directly support the music and artists you love.</Title>
      <Button onClick={() => console.log('Learn more')}>Learn more.</Button>
    </Shoutout>
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
`

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
`

const Shoutout = styled.div`
  position: absolute;
  top: 25%;
  left: 8%;
`

const Title = styled.h1`
  font-weight: 900;
  color: #fff;
  font-size: 6rem;
  max-width: 50rem;
  padding-bottom: 3rem;
  letter-spacing: 3px;
`
