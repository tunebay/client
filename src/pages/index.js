// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

type Props = {||}

class Index extends Component<Props, void> {
  render() {
    return (
      <Layout>
        <Hero />
        <HotRightNow />
      </Layout>
    )
  }
}

const HotRightNow = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  height: 95vh;
`

export default Index
