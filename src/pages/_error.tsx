import React, { Component } from 'react';

import styled from '../lib/theme';

import Layout from '../components/Layout';
import { OgMetaType } from '../types';

interface Props {
  statusCode: 404 | 500;
  url: any;
}

export default class Error extends Component<Props> {
  static ogMeta: OgMetaType = {
    title: 'Tunebay | For the love of music', // og title not page title
    type: 'website',
    url: 'https://tunebay.com',
    image: {
      url: 'https://s3.eu-west-2.amazonaws.com/tunebay/ogimage.png',
      width: '1200',
      height: '630',
    },
    description:
      'Directly support the music and artist you love on Tunebay. Discover new music from around the world or upload and sell your own.',
  };

  render() {
    const { statusCode, url } = this.props;
    return (
      <Layout ogMeta={Error.ogMeta} title="Page not found 👀">
        <Main>
          <Heading>Sorry that page does not exist!</Heading>
          <Paragraph>Try searching for a result instead</Paragraph>
          <Input defaultValue={url.query.username} />
          <Paragraph>{statusCode}</Paragraph>
        </Main>
      </Layout>
    );
  }
}

const Main = styled.main`
  text-align: center;
  padding-top: 7rem;
`;

const Paragraph = styled.p`
  line-height: 1.4;
  padding: 3rem 0;
`;

const Heading = styled.h2`
  font-size: 3.6rem;
  font-weight: 800;
`;

const Input = styled.input`
  background-color: ${props => props.theme.lightestGrey};
  font-size: 1.6rem;
  padding: 0 1.5rem;

  width: 40rem;
  height: 4rem;
  border-radius: 6px;

  outline: none;
  border: none;
`;
