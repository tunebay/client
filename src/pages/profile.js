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
  url: any,
  data: { user: UserType },
|};

class Profile extends Component<Props, void> {
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
    image: { url: user.photo, width: '500', height: '500' },
    description: `Listen to and directly support ${user.name} on Tunebay`,
  });

  render() {
    const { data, url } = this.props;
    console.log('props', this.props);
    if (!data || data.loading) return null;
    const { user } = data;
    if (!data.user) return <Error statusCode={404} url={url} />;

    console.log('Profile data', this.props.data);

    return (
      <Layout ogMeta={this.ogMeta(user)} title={user.name}>
        <Cover image={user.cover}>
          <Overlay />
        </Cover>
        <Nav />

        <Main>
          <Grid>
            <User>
              <ProfilePicture photo={user.photo} />
              <Name>{user.name}</Name>
              <Username>@{user.username}</Username>
              <Bio>{user.bio}</Bio>
              <FollowButton>Subscribe</FollowButton>
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

const Nav = styled.nav`
  box-shadow: ${props => props.theme.boxShadow};
  height: 6rem;
  background-color: white;
`;

const CSSGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 31%);
  grid-gap: 5%;
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

  height: 5rem;
  width: 100%;
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
  color: ${props => props.theme.darkGrey};
  font-size: 1.6rem;
  font-weight: 400;
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

// Profile.getInitialProps = context => ({
//   serverRendered: !!context.req,
//   query: context.query,
// });

const gqlWrapper = graphql(query, {
  options: props => {
    const { username } = props.query;
    return { variables: { username } };
  },
});

export default withData(gqlWrapper(Profile));
