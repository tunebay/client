// @flow
import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

import Layout from '../components/Layout'

type Props = {|
  shows: any,
|}

class Index extends Component<Props, void> {
  static async getInitialProps() {
    const { data } = await axios.get(
      'https://api.tvmaze.com/search/shows?q=batman',
    )

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
      shows: data,
    }
  }

  render() {
    const { shows } = this.props

    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {shows.map(({ show }) => (
            <li key={show.id}>
              <Link as={`/${show.id}`} href={`/user?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Index
