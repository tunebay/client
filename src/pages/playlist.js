// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import type { PlaylistType } from '../types';
import Layout, { Grid } from '../components/Layout';
import { aspectRatio } from '../lib/styleUtils';
import { Chevron } from '../components/svgs';

type Props = {|
  playlist: PlaylistType,
|};

class Playlist extends Component<Props, void> {
  static getInitialProps: () => any;

  render() {
    const { artwork, supporters, price } = this.props.playlist;

    return (
      <Layout title="Walk Tall by General Roots">
        <Main>
          <Grid>
            <LeftContent>
              <Artwork image={artwork} />
              <BuyButton>
                <BuyMain>Buy now £{price}</BuyMain>
                <BuyMenu>
                  <Chevron fill="#ffffff" />
                </BuyMenu>
              </BuyButton>
              <Supporters supporters={supporters} />
            </LeftContent>
            <RightCotent>Right side content</RightCotent>
          </Grid>
        </Main>
      </Layout>
    );
  }
}

const Supporters = props => {
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
          {supporters.map(user => <Avatar image={user.avatar} />)}
        </SupportersList>
      )}
    </Section>
  );
};

const SupportersList = styled.ul`
  display: flex;
  list-style: none;
`;

const Avatar = styled.li`
  background-image: url(${props => props.image});

  width: 4.4rem;
  height: 4.4rem;
  border-radius: 500px;
  margin-right: 0.8rem;

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
  font-weight: 600;

  text-transform: uppercase;
`;

const BuyButton = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 6.4rem;

  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const BuyMain = styled.button`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};

  flex: 5;
  border-radius: 6px 0 0 6px;
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
  border-radius: 0 6px 6px 0;

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

const RightCotent = styled.div`
  width: 65%;
  background-color: #e4e4e4;
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

Playlist.getInitialProps = async () => {
  const playlist = {
    title: 'Walk Tall',
    artwork: 'https://i1.sndcdn.com/artworks-000174984121-jlksuw-t500x500.jpg',
    price: 5.99,
    currency: 'GBP',
    tracks: [],
    supporters: [
      {
        id: 1,
        avatar:
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p50x50/16996405_10154356162762895_1493811469734824672_n.jpg?oh=a3be628e8c9b5f2d25fb92d9a9829ac3&oe=5AB97316',
      },
      {
        id: 2,
        avatar:
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p50x50/21740414_10159322113150427_6477255442795043231_n.jpg?oh=3bd907166d28d0217feda45a5c1dde83&oe=5AB8F817',
      },
      {
        id: 3,
        avatar:
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p50x50/16105616_10210380459341549_8574739943940922093_n.jpg?oh=278eb3751023aea174493e8342e4aaa3&oe=5AD749D0',
      },
    ],
    artist: {
      id: 1,
      name: 'Mabel',
      username: 'mabel',
    },
  };

  return { playlist };
};

export default Playlist;
