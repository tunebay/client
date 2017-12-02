// @flow
import React from 'react'
import Head from 'next/head'
import { injectGlobal } from 'styled-components'

export default () => (
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
  *::after, {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.7em;
    box-sizing: border-box;
    color: #111;
  }
`
