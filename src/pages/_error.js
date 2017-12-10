// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

type Props = {
  statusCode: 404 | 500,
  url: any,
}

export default class Error extends Component<Props, void> {
  render() {
    const { statusCode, url } = this.props
    return (
      <Layout>
        <Main>
          <Heading>Sorry that page does not exist!</Heading>
          <P>Try searching for a result instead</P>
          <Input defaultValue={url.query.username} />
          <P>{statusCode}</P>
        </Main>
      </Layout>
    )
  }
}

const Main = styled.main`
  text-align: center;
  padding-top: 7rem;
`

const P = styled.p`
  line-height: 1.4;
  padding: 3rem 0;
`

const Heading = styled.h2`
  font-size: 3.6rem;
  font-weight: 800;
`

const Input = styled.input`
  background-color: ${props => props.theme.lightestGrey};
  font-size: 1.6rem;
  padding: 0 1.5rem;

  width: 40rem;
  height: 4rem;
  border-radius: 6px;

  outline: none;
  border: none;
`
