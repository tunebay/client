// @flow
import * as React from 'react'
import styled from 'styled-components'

import Meta from './Meta'

type Props = {|
  children: React.Node,
|}

class Layout extends React.Component<Props, void> {
  render() {
    const { children } = this.props

    return (
      <StyledLayout>
        <Meta />
        {children}
      </StyledLayout>
    )
  }
}

const StyledLayout = styled.div`
  width: 100%;
  padding: 3rem;
`

export default Layout
