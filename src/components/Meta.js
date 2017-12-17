// @flow
import React from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import { media } from '../lib/styleUtils';

type Props = {|
  title: string,
|};

export default (props: Props) => {
  const { title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tunebay.com" />
        <meta property="og:title" content="Tunebay | For the love of music" />

        <meta
          property="og:image"
          content="https://s3.eu-west-2.amazonaws.com/tunebay/ogimage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Directly support the music and artist you love on Tunebay. Discover new music from around the world or upload and sell your own."
        />
        <meta property="og:locality" content="London" />
        <meta
          property="og:audio"
          content="https://s3.eu-west-2.amazonaws.com/tunebay-upload/users/music/0305b386-2be0-45b1-a701-c3594afb0241"
        />
        <meta property="og:country-name" content="United Kingdom" />

        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,900i"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
};

injectGlobal`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;

    box-sizing: inherit;
  }

  ul {
    list-style: none;
  }

  html {
    font-size: 62.5%;

    ${media.phone`font-size: 50%`};
  }

  body {
    color: ${props => props.theme.black};

    font-family: 'Roboto', sans-serif;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.4px;

    box-sizing: border-box;
  }
`;
