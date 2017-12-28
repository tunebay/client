// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Layout, { Grid } from '../components/Layout';
import type { UserType, OgMetaType } from '../types';
import { aspectRatio, truncate } from '../lib/styleUtils';
import withData from '../lib/withData';

import Error from './_error';

type Props = {|
  statusCode?: 404 | 500,
  url: any,
  data: { user: UserType },
|};

class Profile extends Component<Props, void> {
  static getInitialProps: any => any;

  ogMeta = (user: UserType): OgMetaType => ({
    title: user.name, // og title not page title
    type: 'music.musician',
    url: `https://tunebay.com/${user}`,
    image: { url: user.photo, width: '500', height: '500' },
    description: `Listen to and directly support ${user.name} on Tunebay`,
  });

  render() {
    console.log('Props', this.props);
    const { data, statusCode, url } = this.props;
    if (!data || data.loading) {
      return null;
    }

    const { user } = data;

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
  width: 100%;
  grid-template-columns: repeat(3, 31%);
  grid-gap: 5%;
`;

const Playlist = styled.div``;

const PlaylistTitle = styled.h2`
  font-size: 2rem;
  padding: 1.6rem 0 0 0;

  ${truncate('100%')};

  &:hover {
    cursor: pointer;
  }
`;

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

const query = gql`
  query Profile($username: String!) {
    user: getUser(username: $username) {
      id
      name
      username
      cover
      photo
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

Profile.getInitialProps = context => ({
  serverRendered: !!context.req,
  query: context.query,
});

const graphqlProfile = graphql(query, {
  options: props => {
    const { username } = props.query;
    return { variables: { username } };
  },
})(Profile);

export default withData(graphqlProfile);
