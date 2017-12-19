// @flow
import React from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import { media } from '../lib/styleUtils';
import type { OgMetaType } from '../types';

type Props = {|
  og: OgMetaType,
  title: string,
|};

export default (props: Props) => {
  const { og, title } = props;
  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:title" content={og.title} />

      <meta property="og:image" content={og.image} />
      <meta property="og:image:width" content={og.imageWidth} />
      <meta property="og:image:height" content={og.imageHeight} />
      <meta property="og:description" content={og.description} />
      <meta property="og:audio" content={og.audio} />
      <meta property="og:locality" content="London" />
      <meta property="og:country-name" content="United Kingdom" />

      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,900i"
        rel="stylesheet"
      />
    </Head>
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
