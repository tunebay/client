// @flow
import React from 'react'
import Head from 'next/head'
import { injectGlobal } from 'styled-components'

import { media } from '../lib/styleUtils'

type Props = {||}

export default (props: Props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,900i"
        rel="stylesheet"
      />
    </Head>
  </div>
)

injectGlobal`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;

    box-sizing: inherit;
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
`
