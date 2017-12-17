// @flow
export type TrackType = {
  id: number,
  name: string,
  duration: number, // seconds
  price: number | null,
};

export type PlaylistType = {
  artwork: string,
  title: string,
  id: number,
  price: number,
  artist: UserType,
  tracks: Array<TrackType>,
  supporters: Array<UserType>,
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
