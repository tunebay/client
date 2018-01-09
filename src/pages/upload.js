import React, { Component } from 'react';
import styled from 'styled-components';

import type { OgMetaType } from '../types';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

class Upload extends Component {
  ogMeta = (): OgMetaType => ({
    title: 'Sell your music online with Tunebay', // og title not page title
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
      <Layout ogMeta={this.ogMeta()} title="Upload">
        <Dashboard>
          <Sidebar />
          <Main>Main</Main>
        </Dashboard>
      </Layout>
    );
  }
}

const Main = styled.main`
  box-shadow: ${props => props.theme.boxShadow};

  flex: 5;
  margin: 3rem;
  border-radius: 6px;

  background-color: white;
`;

const Dashboard = styled.div`
  display: flex;
`;

export default Upload;
