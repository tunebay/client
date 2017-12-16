// @flow
import React, { Component } from 'react'

import Layout from '../components/Layout'

type Props = {||}

class Playlist extends Component<Props, void> {
  static getInitialProps: () => any

  render() {
    return (
      <Layout>
        <h1>Playlist Page</h1>
      </Layout>
    )
  }
}

export default Playlist
