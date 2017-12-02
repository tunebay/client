// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

type Props = {||}

class Logo extends Component<Props, void> {
  render() {
    return (
      <LogoBox>
        <Image src="/static/logo.png" />
      </LogoBox>
    )
  }
}

const LogoBox = styled.div``

const Image = styled.img`
  height: 3.5rem;
`

export default Logo
