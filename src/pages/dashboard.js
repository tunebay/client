import React, { Component } from 'react';
import styled from 'styled-components';

import type { OgMetaType } from '../types';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

export default class extends Component {
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
      <Layout ogMeta={this.ogMeta()} title="Dashboard">
        <Dashboard>
          <Sidebar />
          <Main>
            <Header>
              <Title>Dashboard</Title>
            </Header>
            <Content />
          </Main>
        </Dashboard>
      </Layout>
    );
  }
}

const Main = styled.main`
  box-shadow: ${props => props.theme.boxShadow};

  flex: 5;
  border-radius: 6px;
`;

const Dashboard = styled.div`
  display: flex;
`;

const Header = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom: 1px solid rgba(153, 153, 153, 0.2);
  background-color: white;
  padding: 0 6rem;

  position: fixed;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
`;

const Content = styled.div`
  box-shadow: ${props => props.theme.boxShadow};

  width: 100%;
  margin: 14rem 6rem 6rem 6rem;

  height: 300rem;
`;
