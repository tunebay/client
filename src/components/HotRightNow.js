// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { media } from '../lib/styleUtils'

import Artwork from './Artwork'

type Props = {||}

const playlists = [
  {
    id: 1,
    title: 'Walk Tall',
    artist: 'General Roots',
    image: 'https://i1.sndcdn.com/artworks-000174984121-jlksuw-t500x500.jpg',
  },
  {
    id: 2,
    title: 'Northern Merry',
    artist: 'Dan Shake',
    image: 'https://i1.sndcdn.com/artworks-000142313354-20yxz2-t500x500.jpg',
  },
  {
    id: 3,
    title: 'One Night Stand Forever',
    artist: 'White',
    image: 'https://i1.sndcdn.com/avatars-000304701253-fj4cee-t500x500.jpg',
  },
  {
    id: 4,
    title: 'Undon',
    artist: 'Ezra Bruno',
    image: 'https://i.scdn.co/image/9da97eee896a43d6b5e3a924a23fb6efed7dfd9a',
  },
]

class HotRightNow extends Component<Props, void> {
  render() {
    return (
      <Grid>
        {playlists.map(playlist => (
          <Artwork image={playlist.image} key={playlist.id} />
        ))}
      </Grid>
    )
  }
}

const Grid = styled.div`
  width: 100%;
  max-width: 123rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.break3`
    display: flex;
    max-width: 100%;
    flex-wrap: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  `};
`

export default HotRightNow
