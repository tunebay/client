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
  max-width: 123rem;
`

export default Layout
