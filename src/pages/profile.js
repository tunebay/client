// @flow
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Layout, { Grid } from '../components/Layout';
import SubNavigation from '../components/SubNavigation';
import type { UserType, OgMetaType } from '../types';
import { aspectRatio, truncate } from '../lib/styleUtils';
import withData from '../withData';

import Error from './_error';

type Props = {|
  url: any,
  data: { user: UserType },
|};

class Profile extends React.Component<Props> {
  static defaultProps: Props;
  static async getInitialProps(ctx) {
    return {
      serverRendered: !!ctx.req,
      query: ctx.query,
    };
  }

  ogMeta = (user: UserType): OgMetaType => ({
    title: user.name, // og title not page title
    type: 'music.musician',
    url: `https://tunebay.com/${user.username}`,
    image: { url: user.profilePicture, width: '500', height: '500' },
    description: `Listen to and directly support ${user.name} on Tunebay`,
  });

  render() {
    const { data, url } = this.props;
    if (!data || data.loading) return null;
    const { user } = data;
    if (!data.user) return <Error statusCode={404} url={url} />;

    return (
      <Layout ogMeta={this.ogMeta(user)} title={user.name}>
        <Cover image={user.coverPhoto}>
          <Overlay />
        </Cover>
        <SubNavigation routes={[]} type="profile" activePath="" />

        <Main>
          <Grid>
            <User>
              <ProfilePicture photo={user.profilePicture} />
              <Name>{user.name}</Name>
              <Username>@{user.username}</Username>
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
  width: 100%;
  grid-gap: 5%;

  display: grid;

  grid-template-columns: repeat(3, 31%);
`;

const Playlist = styled.div``;

const PlaylistTitle = styled.h2`
  font-size: 1.8rem;
  padding: 1.4rem 0 0 0;
  font-weight: 800;
  line-height: 1.6;

  ${truncate('100%')};

  &:hover {
    cursor: pointer;
  }
`;

const FollowButton = styled.button`
  background-color: ${props => props.theme.primaryRed};
  color: ${props => props.theme.white};

  height: 4rem;
  width: 20rem;
  border-radius: 500px;
  font-weight: 700;
  font-size: 1.4rem;
  transition: all 75ms ease-out;
  margin-top: 1.6rem;

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

export const Main = styled.main`
  margin-top: 5rem;
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
  margin-top: -22rem;
  width: 21%;
`;

const Name = styled.h1`
  padding-top: 2rem;
  font-size: 2.8rem;
  font-weight: 800;
`;

const Bio = styled.p`
  font-size: 1.4rem;
  padding: 0;
  font-weight: 400;
  line-height: 1.4;
`;

const Username = styled.h3`
  color: ${props => props.theme.darkestGrey};
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1.6rem;
  padding-top: 0.4rem;
`;

const ProfilePicture = styled.button`
  background-image: url(${props => props.photo});
  box-shadow: ${props => props.theme.boxShadow};

  width: 80%;
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
  width: 74%;
  height: 50px;
`;

const Cover = styled.div`
  background-image: url(${props => props.image});
  position: relative;
  background-size: cover;
  z-index: -1;
  padding-bottom: 21%; /* Dont change this value */
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  position: absolute;

  background-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.4));
`;

const query = gql`
  query Profile($username: String!) {
    user: getUser(username: $username) {
      id
      name
      username
      coverPhoto
      profilePicture
      bio
      playlists {
        id
        title
        artwork
        permalink
      }
    }
  }
`;

const gqlWrapper = graphql(query, {
  options: props => {
    const { username } = props.query;
    return { variables: { username } };
  },
});

export default withData(gqlWrapper(Profile));
