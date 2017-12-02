// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Logo from '../components/Logo'

type Props = {||}

class Index extends Component<Props, void> {
  render() {
    return (
      <Layout>
        <Hero>
          <Logo />
        </Hero>
      </Layout>
    )
  }
}

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 73vh;
  padding: 3rem;
  background-color: #141822;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`

export default Index
