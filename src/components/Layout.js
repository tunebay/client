// @flow
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../lib/theme'
import { media, boxShadow } from '../lib/styleUtils'

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
            Download the Tunebay app for the best on-the-go experience.
          </DownloadApp>
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

const DownloadApp = styled.div`
  background-color: ${props => props.theme.primaryRedOpacity(0.98)};
  color: ${props => props.theme.white};

  bottom: 0;
  font-weight: 600;
  height: 100px;
  width: 100%;
  padding: 2rem;

  align-items: center;
  display: none;
  justify-content: center;
  position: fixed;
  text-align: center;
  text-transform: uppercase;

  ${boxShadow()};

  ${media.phone`
    display: flex;
  `};
`

const StyledLayout = styled.div`
  width: 100%;
  padding-bottom: 10rem;
`

export default Layout
