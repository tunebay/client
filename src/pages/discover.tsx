import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SubNavigation from '../components/SubNavigation';
import FeaturedArtists from '../components/FeaturedArtists';
import withData from '../withData';

class Discover extends Component<{}, {}> {
  render() {
    return (
      <Layout title="Tunebay | Upload">
        <SubNavigation
          type="discover"
          routes={[
            { name: 'Upload', path: '/upload' },
            { name: 'Your Music', path: '/you/music' },
            { name: 'Stats', path: '/you/stats' },
            { name: 'Sales', path: '/you/sales' },
          ]}
          activePath="/upload" // TODO make this state in nav
        />
        <Main>
          <Section>
            <SectionTitle>Rock</SectionTitle>
            <FeaturedArtists count={5} />
          </Section>
          <Section grey={true}>
            <SectionTitle>Pop</SectionTitle>
            <FeaturedArtists count={5} />
          </Section>
          <Section>
            <SectionTitle>Soul</SectionTitle>
            <FeaturedArtists count={5} />
          </Section>
        </Main>
      </Layout>
    );
  }
}

const Section = styled.section`
  padding: 3rem;
  background-color: ${props => (props.grey ? props.theme.lightestGrey : 'white')};
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  padding-bottom: 2.5rem;
  padding-left: 3rem;
`;

const Main = styled.main``;

export default withData(Discover);
