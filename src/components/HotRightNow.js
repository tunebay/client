// @flow
import React, { Component } from 'react';

import type { PlaylistType } from '../types';

import PlayablePlaylist from './PlayablePlaylist';
import { Grid } from './Layout';

const dummyPlaylists = [
  {
    id: 1,
    title: 'Walk Tall',
    artist: { name: 'General Roots' },
    artwork: 'https://i1.sndcdn.com/artworks-000174984121-jlksuw-t500x500.jpg',
  },
  {
    id: 2,
    title: 'Northern Merry',
    artist: { name: 'Dan Shake' },
    artwork: 'https://i1.sndcdn.com/artworks-000142313354-20yxz2-t500x500.jpg',
  },
  {
    id: 3,
    title: 'One Night Stand Forever',
    artist: { name: 'White' },
    artwork: 'https://i1.sndcdn.com/avatars-000304701253-fj4cee-t500x500.jpg',
  },
  {
    id: 4,
    title: 'undone',
    artist: { name: 'Ezra Bruno' },
    artwork: 'https://i.scdn.co/image/9da97eee896a43d6b5e3a924a23fb6efed7dfd9a',
  },
];

type Props = {|
  playlists: Array<PlaylistType>,
|};

class HotRightNow extends Component<Props, void> {
  static getInitialProps: () => any;

  static defaultProps: { playlists: Array<PlaylistType> };

  render() {
    const { playlists } = this.props;

    return (
      <Grid>
        {playlists.map(playlist => (
          <PlayablePlaylist
            key={playlist.id}
            artwork={playlist.artwork}
            title={playlist.title}
            artist={playlist.artist.name}
          />
        ))}
      </Grid>
    );
  }
}

HotRightNow.defaultProps = { playlists: dummyPlaylists };

export default HotRightNow;
