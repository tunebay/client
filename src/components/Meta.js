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
  const { title, og } = props;

  if (!og)
    throw new Error(
      'You must add Open Graph meta for top level page components.'
    );

  if (!title) throw new Error('You must add a title for the page');

  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:title" content={og.title} />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:width" content={og.image.width} />
      <meta property="og:image:height" content={og.image.height} />
      <meta property="og:description" content={og.description} />

      <meta property="og:locality" content="London" />
      <meta property="og:country-name" content="United Kingdom" />
      <meta property="og:audio" content={og.audio} />

      <link rel="icon" href="/static/favicon-32x32.png" type="image/x-icon" />
      <link rel="icon" href="/static/favicon-16x16.png" type="image/x-icon" />

      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800,900"
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
    vertical-align: middle;
    font-family: inherit;
    box-sizing: inherit;
    font-weight: inherit;
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

    font-family: 'Muli', sans-serif;

    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.4px;

    box-sizing: border-box;
  }

  /* Prevent page scroll when modal is open */
  .ReactModal__Body--open {
    overflow: hidden;
  }
`;
