// @flow

export type TrackType = {
  +duration: number, // seconds
  +id: number,
  +name: string,
  +position: number, // position in playlist
  +price: number | null,
};

export type PlaylistType = {
  +artist: UserType,
  +artwork: string,
  +id: number,
  +permalink: string,
  +price: number,
  +supporters: Array<UserType>,
  +title: string,
  +tracks: Array<TrackType>,
};

export type UserType = {
  +avatar: string,
  +bio: string,
  +cover: string,
  +id: number,
  +name: string,
  +photo: string,
  +playlists: Array<PlaylistType>,
  +username: string,
};

export type OgMetaType = {|
  +description: string,
  +image: OgImageType,
  +title: string,
  +type: string,
  +url: string,
  +audio?: string,
|};

type OgImageType = {|
  +height: string,
  +url: string,
  +width: string,
|};
