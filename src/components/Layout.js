// @flow
import * as React from 'react'
import { withRouter } from 'next/router'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../lib/theme'
import { media } from '../lib/styleUtils'

import Meta from './Meta'
import Header from './Header'

type Props = {|
  children: React.Node,
  router: any,
|}

class Layout extends React.Component<Props, void> {
  render() {
    const { children, router } = this.props
    const headerVisible = router.pathname !== '/'

    return (
      <ThemeProvider theme={theme}>
        <StyledLayout headerVisible={headerVisible}>
          <Meta />
          <Header visible={headerVisible} />
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
  box-shadow: ${props => props.theme.boxShadow};
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

  ${media.phone`
    display: flex;
  `};
`

const StyledLayout = styled.div`
  padding-top: ${props => (props.headerVisible ? '60px' : '0')};

  width: 100%;
  padding-bottom: 10rem;
`

export default withRouter(Layout)
