// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HotRightNow from '../components/HotRightNow'

type Props = {||}

class Index extends Component<Props, void> {
  render() {
    return (
      <Layout>
        <Hero />

        <Section>
          <Title>Hot right now</Title>
          <HotRightNow />
        </Section>
      </Layout>
    )
  }
}

const Section = styled.section`
  width: 100%;
  height: 40.5rem;
  padding: 0 3rem;

  text-align: center;
`

const Title = styled.h3`
  margin: 0 auto;
  padding-bottom: 6rem;
  font-size: 1.4rem;
  font-weight: 600;

  text-transform: uppercase;
`

export default Index
