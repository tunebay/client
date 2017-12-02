// @flow
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../lib/theme'

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
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

const StyledLayout = styled.div`
  width: 100%;
  padding: 3rem;
`

export default Layout
