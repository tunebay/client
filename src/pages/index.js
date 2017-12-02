// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Button from '../components/Button'
import NavLink from '../components/NavLink'

import theme from '../lib/theme'

type Props = {||}

class Index extends Component<Props, void> {
  render() {
    return (
      <Layout>
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
            <Button onClick={() => console.log('Learn more')}>
              Learn more.
            </Button>
          </Shoutout>
        </Hero>
      </Layout>
    )
  }
}

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
`

const NavLinks = styled.nav``

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;

  background-color: #1a1e28; // #1C1422
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
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

export default Index
