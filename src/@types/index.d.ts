import reducers from '../reducers';

export interface TrackType {
  duration: number; // seconds
  id: number;
  title: string;
  playlistPosition: number;
  price?: number;
}

export interface PlaylistType {
  artist: UserType;
  artwork: string;
  id: number;
  permalink: string;
  price: number;
  supporters: UserType[];
  title: string;
  tracks: TrackType[];
}

export interface UserType {
  avatar: string;
  bio: string;
  coverPhoto: string;
  id: number;
  name: string;
  profilePicture: string;
  playlists: PlaylistType[];
  username: string;
}

export interface OgMetaType {
  description: string;
  image: OgImageType;
  title: string;
  type: string;
  url: string;
  audio?: string;
}

interface OgImageType {
  height: string;
  url: string;
  width: string;
}

type RootState = typeof reducers;
