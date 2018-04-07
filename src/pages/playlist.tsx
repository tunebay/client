import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// import type { PlaylistType, OgMetaType, UserType } from '../types';
import Layout, { Grid } from '../components/Layout';
import ProfileLink from '../components/ProfileLink';
import { aspectRatio } from '../lib/styleUtils';
import { Chevron } from '../components/icons/index';
import TrackList from '../components/TrackList';
import withData from '../withData';

import Error from './_error';

// type Props = {|
//   data: { playlist: PlaylistType, loading: boolean },
//   url: any,
// |};

class Playlist extends Component {
  // ogMeta = (playlist: PlaylistType): OgMetaType => ({
  //   title: `${playlist.title} by ${playlist.artist.name}`, // og title not page title
  //   type: 'music.musician',
  //   url: `https://tunebay.com/${playlist.artist.username}/${
  //     playlist.permalink
  //   }`,
  //   image: { url: playlist.artwork, width: '500', height: '500' },
  //   description: `Listen to and ${playlist.title} by ${
  //     playlist.artist.name
  //   } on Tunebay`,
  // });

  render() {
    const { data, url } = this.props;

    if (!data || data.loading) return null;
    const { playlist } = data;

    if (!playlist) return <Error statusCode={404} url={url} />;
    const { artwork, price, artist, title, tracks } = playlist;

    // TODO still need to come from server
    const supporters = [];

    return (
      <Layout ogMeta={this.ogMeta(playlist)} title={`${title} by ${artist.name}`}>
        <Main>
          <Grid>
            <LeftContent>
              <Artwork image={artwork} />
              <BuyButton>
                <BuyMain>Buy £{price}</BuyMain>
                <BuyMenu>
                  <Chevron fill="#ffffff" />
                </BuyMenu>
              </BuyButton>
              <Supporters supporters={supporters} />
            </LeftContent>

            <RightCotent>
              <ProfileLink username={artist.username}>
                <ArtistDetails>
                  <Avatar image={artist.profilePicture /* TODO avatar */} />
                  <ArtistName>{artist.name}</ArtistName>
                </ArtistDetails>
              </ProfileLink>

              <PlaylistDetails>
                <PlaylistTitle>{title}</PlaylistTitle>
                {/* TODO decide if to count and sum on client or server. */}
                <PlaylistMeta>6 Songs, 25 min &#8226; 20th Dec 2017</PlaylistMeta>
                <TrackList tracks={tracks} />
              </PlaylistDetails>
            </RightCotent>
          </Grid>
        </Main>
      </Layout>
    );
  }
}

// LEFT SECTION

const Supporters = (props: { supporters: Array<UserType> }) => {
  const { supporters } = props;
  return (
    <Section>
      <SectionTitle>Supported by</SectionTitle>
      {supporters.length === 0 ? (
        <NoSupporters>
          Be the first to support this artists work{' '}
          <span aria-label="hands up" role="img">
            🙌
          </span>
        </NoSupporters>
      ) : (
        <SupportersList>
          {supporters.map(user => (
            <Li key={user.id}>
              <Avatar image={user.avatar} />
            </Li>
          ))}
        </SupportersList>
      )}
    </Section>
  );
};

const SupportersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Li = styled.li`
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
`;

const Avatar = styled.div`
  background-image: url(${(props: { image: string }) => props.image});

  width: 4.4rem;
  height: 4.4rem;
  border-radius: 500px;

  background-size: contain;

  &:hover {
    cursor: pointer;
  }
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

const Section = styled.section`
  margin-top: 3rem;
  width: 100%;
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.darkestGrey};

  margin: 0 auto;
  padding-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: 800;

  text-transform: uppercase;
`;

const BuyButton = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 6rem;

  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const BuyMain = styled.button`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};

  flex: 5;
  border-radius: 600px 0 0 600px;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1px;

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const BuyMenu = styled.button`
  background-color: ${props => props.theme.darkGreen};

  flex: 1;
  border-radius: 0 600px 600px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const LeftContent = styled.div`
  width: 31%;
`;

// TODO break out same as in profile
const Main = styled.main`
  width: ${props => props.theme.contentWidth};
  margin-top: 6rem;
  width: 100%;
  padding: 0 3rem;

  text-align: left;
`;

const NoSupporters = styled.p`
  color: ${props => props.theme.darkGrey};
  font-size: 1.4rem;
`;

// RIGHT SECTION
const RightCotent = styled.div`
  width: 65%;
`;

const ArtistDetails = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ArtistName = styled.h2`
  color: ${props => props.theme.primaryRed};

  font-size: 1.8rem;
  padding-left: 1.5rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const PlaylistDetails = styled.div`
  width: 100%;
`;

const PlaylistTitle = styled.h1`
  font-size: 3.8rem;
  font-weight: 900;
  padding: 1.5rem 0;
`;

const PlaylistMeta = styled.p`
  color: ${props => props.theme.darkGrey};
  font-size: 1.3rem;
  letter-spacing: 0.8px;
  font-weight: 400;
`;

const query = gql`
  query Playlist($id: Int, $username: String, $permalink: String) {
    playlist: getPlaylist(id: $id, username: $username, permalink: $permalink) {
      id
      title
      artwork
      price
      permalink
      tracks {
        duration
        id
        price
        playlistPosition
        title
      }
      # supporters {
      #   id
      #   avatar
      # }
      artist {
        id
        name
        username
        profilePicture
      }
    }
  }
`;

Playlist.getInitialProps = context => ({
  serverRendered: !!context.req,
  query: context.query,
});

const graphqlPlaylist = graphql(query, {
  options: props => {
    const { id, permalink, username } = props.query;
    return props.serverRendered
      ? { variables: { permalink, username, id: null } }
      : { variables: { id, permalink: null, username: null } };
  },
})(Playlist);

export default withData(graphqlPlaylist);
