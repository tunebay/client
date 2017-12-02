// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { media } from '../lib/styleUtils'

type Props = {||}

const playlists = [
  {
    id: 1,
    title: 'A Long Way Home',
    artist: 'Youngen',
    image:
      'https://www.bonzaiprogressive.com/wp-content/uploads/2015/11/12589000.jpg',
  },
  {
    id: 2,
    title: 'Northern Merry',
    artist: 'Dan Shake',
    image: 'https://i1.sndcdn.com/artworks-000142313354-20yxz2-t500x500.jpg',
  },
  {
    id: 3,
    title: 'Unconditional',
    artist: 'Sinead Harnett',
    image: 'https://i.scdn.co/image/257c608a45726323cc56d20472502f791621ba8a',
  },
  {
    id: 4,
    title: 'Undon',
    artist: 'Ezra Bruno',
    image:
      'https://www.bonzaiprogressive.com/wp-content/uploads/2015/11/12589000.jpg',
  },
]

class HotRightNow extends Component<Props, void> {
  render() {
    return (
      <Grid>
        <List>{playlists.map(playlist => <Playlist key={playlist.id} />)}</List>
      </Grid>
    )
  }
}

const Grid = styled.div`
  width: 100%;
  max-width: 123rem;
  margin: 0 auto;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`

const Playlist = styled.div`
  height: 27rem;
  width: 27rem;
  background-color: #ccc;
  border-radius: 6px;

  ${media.desktop`
    height: 21vw;
    width: 21vw;
  `};
`

export default HotRightNow
