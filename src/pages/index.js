// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout, { Section } from '../components/Layout'
import Hero from '../components/Hero'
import HotRightNow from '../components/HotRightNow'
import ForTheLoveOfMusic from '../components/ForTheLoveOfMusic'
import FeaturedArtists from '../components/FeaturedArtists'
import CallToActionFooter from '../components/CallToActionFooter'

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

        <ForTheLoveOfMusic />

        <Section>
          <Title>Featured artists</Title>
          <FeaturedArtists />
        </Section>

        <CallToActionFooter />
      </Layout>
    )
  }
}

const Title = styled.h3`
  margin: 0 auto;
  padding-bottom: 6rem;
  font-size: 1.4rem;
  font-weight: 600;

  text-transform: uppercase;
`

export default Index
