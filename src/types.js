// @flow
export type TrackType = {
  id: number,
  name: string,
  duration: number, // seconds
  price: number | null,
  position: number, // position in playlist
};

export type PlaylistType = {
  artwork: string,
  title: string,
  id: number,
  price: number,
  artist: UserType,
  tracks: Array<TrackType>,
  supporters: Array<UserType>,
  permalink: string,
};

export type UserType = {
  id: number,
  name: string,
  username: string,
  bio: string,
  cover: string,
  photo: string,
  avatar: string,
  playlists: Array<PlaylistType>,
};

export type OgMetaType = {|
  // required
  title: string,
  type: string,
  url: string,
  image: string,
  imageHeight: string,
  imageWidth: string,
  description: string,
  // not required
  audio?: string,
|};
