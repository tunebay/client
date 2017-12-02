// @flow
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../lib/theme'
import { media } from '../lib/styleUtils'

import Meta from './Meta'

type Props = {|
  children: React.Node,
|}

class Layout extends React.Component<Props, void> {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Meta />
          {children}
          <DownloadApp>
            Download the app for the best mobile experience!
          </DownloadApp>
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

const DownloadApp = styled.div`
  position: fixed;
  height: 60px;
  background-color: #fff;
  text-transform: uppercase;
  width: 100%;
  bottom: 0;
  display: none;
  ${media.phone`
    display: block;
  `};
`

const StyledLayout = styled.div`
  width: 100%;
`

export default Layout
