// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Grid from './Grid'

type Props = {||}

class FeaturedArtists extends Component<Props, void> {
  render() {
    return (
      <Grid>
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </Grid>
    )
  }
}

const Artist = styled.div`
  background-color: #e4e4e4;
  height: 48rem;
  width: 23%;
  border-radius: 6px;
`

export default FeaturedArtists
