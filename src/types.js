// @flow
export type PlaylistType = {|
  artwork: string,
  title: string,
  id: number,
  artist: string,
|}

export type UserType = {|
  name: string,
  bio: string,
  cover: string,
  photo: string,
  playlists: Array<PlaylistType>,
|}
