// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import Layout, { Section } from '../components/Layout';
import Hero from '../components/Hero';
import HotRightNow from '../components/HotRightNow';
import ForTheLoveOfMusic from '../components/ForTheLoveOfMusic';
import FeaturedArtists from '../components/FeaturedArtists';
import CallToActionFooter from '../components/CallToActionFooter';
import withData from '../lib/withData';
import type { OgMetaType } from '../types';

type Props = {||};

class Index extends Component<Props> {
  ogMeta = (): OgMetaType => ({
    title: 'Tunebay | For the love of music', // og title not page title
    type: 'website',
    url: 'https://tunebay.com',
    image: {
      url: 'https://s3.eu-west-2.amazonaws.com/tunebay/ogimage.png',
      height: '630',
      width: '1200',
    },
    description:
      'Directly support the music and artist you love on Tunebay. Discover new music from around the world or upload and sell your own.',
  });

  render() {
    return (
      <Layout ogMeta={this.ogMeta()} title="Tunebay | For the love of music">
        <Hero />

        <Section>
          <Title>Hot right now</Title>
          {/* $FlowFixMe will be fixed with real data */}
          <HotRightNow />
        </Section>

        <ForTheLoveOfMusic />

        <Section>
          <Title>Featured artists</Title>
          <FeaturedArtists />
        </Section>

        <CallToActionFooter />
      </Layout>
    );
  }
}

const Title = styled.h3`
  margin: 0 auto;
  padding-bottom: 6rem;
  font-size: 1.4rem;
  font-weight: 800;

  text-transform: uppercase;
`;

export default withData(Index);
