// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Layout, { Grid } from '../components/Layout';
import type { UserType, OgMetaType } from '../types';
import { aspectRatio, truncate } from '../lib/styleUtils';

import Error from './_error';

type Props = {|
  user: UserType,
  statusCode?: 404 | 500,
  url: any,
|};

class Profile extends Component<Props, void> {
  static getInitialProps: any => any;

  ogMeta = (user: UserType): OgMetaType => ({
    title: user.name, // og title not page title
    type: 'music.musician',
    url: `https://tunebay.com/${user.username}`,
    image: { url: user.photo, width: '500', height: '500' },
    description: `Listen to and directly support ${user.name} on Tunebay`,
  });

  render() {
    const { user, statusCode, url } = this.props;
    if (statusCode) return <Error statusCode={statusCode} url={url} />;

    return (
      <Layout ogMeta={this.ogMeta(user)} title={user.name}>
        <Cover>
          <CoverPhoto src={user.cover} />
          <Overlay />
        </Cover>

        <Main>
          <Grid>
            <User>
              <ProfilePicture photo={user.photo} />
              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
              <FollowButton>Follow</FollowButton>
            </User>
            <Playlists>
              <CSSGrid>
                {user.playlists.map(playlist => (
                  <Link
                    key={playlist.id}
                    as={`/${user.username}/${playlist.permalink}`}
                    href={`/playlist?id=${playlist.id}`}
                  >
                    <Playlist>
                      <Artwork key={playlist.id} image={playlist.artwork} />
                      <PlaylistTitle>{playlist.title}</PlaylistTitle>
                    </Playlist>
                  </Link>
                ))}
              </CSSGrid>
            </Playlists>
          </Grid>
        </Main>
      </Layout>
    );
  }
}

const CSSGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3%;
  grid-column-gap: 4%;
`;

const Playlist = styled.div``;

const FollowButton = styled.button`
  background-color: ${props => props.theme.primaryRed};
  color: ${props => props.theme.white};

  height: 3.6rem;
  width: 12rem;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.3rem;
  transition: all 75ms ease-out;

  letter-spacing: inherit;
  border: none;
  outline: none;
  font-family: inherit;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkRed};
  }
`;

const PlaylistTitle = styled.h2`
  font-size: 2rem;
  padding: 1.2rem 0;

  ${truncate('100%')};

  &:hover {
    cursor: pointer;
  }
`;

export const Main = styled.main`
  margin-top: 6rem;
  width: 100%;
  padding: 0 3rem;

  text-align: left;
`;

// TODO break out - same as one on playlist page
const Artwork = styled.div`
  background-image: url(${props => props.image});
  box-shadow: ${props => props.theme.boxShadow};

  width: 100%;
  border-radius: 6px;

  background-size: cover;

  ${aspectRatio('100%')};

  &:hover {
    cursor: pointer;
  }
`;

const User = styled.div`
  margin-top: -13rem;
  width: 23.5%;
`;

const Name = styled.h1`
  padding-top: 2rem;
  font-size: 3rem;
  font-weight: 900;
`;

const Bio = styled.p`
  font-size: 1.5rem;
  padding: 1.2rem 0;
  line-height: 1.4;
`;

const ProfilePicture = styled.button`
  background-image: url(${props => props.photo});
  box-shadow: ${props => props.theme.boxShadow};

  width: 75%;
  transition: all 300ms ease-out;
  border-radius: 100%;
  border: 0.5rem solid white;

  outline: none;
  background-size: cover;
  box-sizing: content-box;

  ${aspectRatio('100%')};

  &:hover {
    cursor: pointer;
  }
`;

const Playlists = styled.div`
  width: 73%;
  height: 50px;
`;

const Cover = styled.header`
  position: relative;
  z-index: -1;
`;

const CoverPhoto = styled.img`
  width: 100%;

  height: auto;
`;

const Overlay = styled.div`
  height: 99%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  position: absolute;

  background-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.4));
`;

Profile.getInitialProps = async context => {
  const { username } = context.query;

  const user = [
    {
      id: 1,
      name: 'Mabel',
      username: 'mabel',
      bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
      cover: 'https://i1.sndcdn.com/visuals-000161652148-8uID1y-t2480x520.jpg',
      photo: 'https://hamadamania.files.wordpress.com/2017/03/mabel08.jpg',
      playlists: [
        {
          id: 1,
          title: 'Ivy To Roses',
          artwork:
            'https://i2.wp.com/s1.xclusivejams.com/2017/10/Mabel-Ivy-To-Roses-Mixtape-iTunes-Plus-M4A.jpg?w=640&ssl=1',
          permalink: 'ivy-to-roses',
        },
        {
          id: 2,
          title: 'My Boy My Town',
          artwork:
            'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/58/6e/51/586e51d3-6175-c286-a06b-7f2d007875f2/15UMGIM65453.jpg/1200x630bb.jpg',
          permalink: 'my-boy-my-town',
        },
        {
          id: 3,
          title: 'Thinking Of You',
          artwork:
            'https://images.genius.com/122c310b162d72c5d271d32753b5fa60.630x630x1.jpg',
          permalink: 'thinking-of-you',
        },
        {
          id: 3,
          title: 'Finders Keepers',
          artwork:
            'https://pbs.twimg.com/profile_images/862396484658057223/0RDeiaKc.jpg',
          permalink: 'finders-keepers',
        },
      ],
    },
    {
      id: 2,
      name: 'Kwabs',
      username: 'kwabs',
      bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
      cover: 'https://i1.sndcdn.com/visuals-000002842378-gQ9HT3-t2480x520.jpg',
      photo: 'https://i1.sndcdn.com/avatars-000129316563-iqfoha-t500x500.jpg',
      playlists: [
        {
          id: 1,
          title: 'Love + War',
          artwork: 'https://i1.sndcdn.com/artworks-0hDPbHUtMjWO-0-t500x500.jpg',
          permalink: 'love-war',
        },
        {
          id: 2,
          title: 'Cheating On Me',
          artwork:
            'https://i1.sndcdn.com/artworks-000138126630-gops5c-t500x500.jpg',
          permalink: 'cheating-on-me',
        },
        {
          id: 3,
          title: 'Walk',
          artwork: 'https://i1.sndcdn.com/artworks-wylrh6pNAk2b-0-t500x500.jpg',
          permalink: 'walk',
        },
      ],
    },
    {
      id: 3,
      name: 'Taya',
      username: 'taya',
      bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
      cover: 'https://i1.sndcdn.com/visuals-000024328107-Rz0BGo-t2480x520.jpg',
      photo: 'https://i1.sndcdn.com/avatars-000332530388-c4w465-t500x500.jpg',
      playlists: [
        {
          id: 1,
          title: 'When Ur Sober',
          artwork: 'https://i1.sndcdn.com/artworks-7xbVEf5nJf1s-0-t500x500.jpg',
          permalink: 'when-ur-sober',
        },
        {
          id: 2,
          title: 'Redlight',
          artwork:
            'https://i1.sndcdn.com/artworks-b2350727-2418-480b-87c0-47178c030ea2-0-t500x500.jpg',
          permalink: 'redlight',
        },
        {
          id: 3,
          title: 'Deeper',
          artwork: 'https://i1.sndcdn.com/artworks-S5enoBO1t7ca-0-t500x500.jpg',
          permalink: 'deeper',
        },
      ],
    },
    {
      id: 4,
      name: 'Super-organism',
      username: 'superorganism',
      bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
      cover: 'https://i1.sndcdn.com/visuals-000280613089-o3KIxO-t2480x520.jpg',
      photo: 'https://i1.sndcdn.com/avatars-000291846497-whxcmc-t500x500.jpg',
      playlists: [
        {
          id: 1,
          title: 'Something For Your M.I.N.D',
          artwork: 'https://i1.sndcdn.com/artworks-NeORKaFfnXy0-0-t500x500.png',
          permalink: 'something-for-your-mind',
        },
        {
          id: 2,
          title: 'Nobody Cares',
          artwork: 'https://i1.sndcdn.com/artworks-w1rexXd0Krku-0-t500x500.png',
          permalink: 'nobody-cares',
        },
      ],
    },
    {
      id: 5,
      name: 'Dan Shake',
      username: 'danshake',
      bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
      cover: 'https://i1.sndcdn.com/visuals-000017457541-BH5eIh-t2480x520.jpg',
      photo: 'https://i1.sndcdn.com/avatars-000115448975-e9t5cp-t500x500.jpg',
      playlists: [
        {
          id: 1,
          title: "Shake's On A Plane ",
          artwork:
            'https://i1.sndcdn.com/artworks-000246329913-s5iwvy-t500x500.jpg',
          permalink: 'shakes-on-a-plane',
        },
        {
          id: 2,
          title: 'Northern Merry',
          artwork:
            'https://i1.sndcdn.com/artworks-000142313354-20yxz2-t500x500.jpg',
          permalink: 'nothern-merry',
        },
      ],
    },
  ].find(foundUser => foundUser.username === username);
  const statusCode = user ? null : 404;
  return { user, statusCode };
};
export default Profile;
