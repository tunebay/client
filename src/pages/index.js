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
          <Title>Selling Right Now</Title>
          <HotRightNow />
        </Section>
      </Layout>
    )
  }
}

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  text-align: center;
  height: 40.5rem;
  padding: 0 3rem;
  padding-top: 3rem;
`

const Title = styled.h3`
  text-transform: uppercase;
  margin: 0 auto;
  padding-bottom: 6rem;
  font-size: 1.4rem;
  font-weight: 600;
`

export default Index
