import React, { Component } from 'react';

import styled from '../lib/theme';
import Layout, { Section } from '../components/Layout';
import Hero from '../components/Hero';
import HotRightNow from '../components/HotRightNow';
import ForTheLoveOfMusic from '../components/ForTheLoveOfMusic';
import FeaturedArtists from '../components/FeaturedArtists';
import CallToActionFooter from '../components/CallToActionFooter';
import withData from '../withData';
import { OgMetaType } from '../@types';

class Index extends Component {
  static ogMeta: OgMetaType = {
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
  };

  render() {
    return (
      <Layout ogMeta={Index.ogMeta} title="Tunebay | For the love of music">
        <Hero />

        <Section>
          <Title>Hot right now</Title>
          {/* TODO use real data for playlists, currently hardcoded in HotRightNow */}
          <HotRightNow playlists={[]} />
        </Section>

        <ForTheLoveOfMusic />

        <Section>
          <Title>Featured artists</Title>
          <FeaturedArtists count={4} />
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
