// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import type { PlaylistType } from '../types'
import Layout, { Grid } from '../components/Layout'
import { aspectRatio } from '../lib/styleUtils'

type Props = {|
  playlist: PlaylistType,
|}

class Playlist extends Component<Props, void> {
  static getInitialProps: () => any

  render() {
    const { artwork, supporters, price } = this.props.playlist

    return (
      <Layout title="Walk Tall by General Roots">
        <Main>
          <Grid>
            <LeftContent>
              <Artwork image={artwork} />
              <BuyButton>
                <BuyMain>Buy now £{price}</BuyMain>
                <BuyMenu />
              </BuyButton>
              <Supporters supporters={supporters} />
            </LeftContent>
            <RightCotent>Right</RightCotent>
          </Grid>
        </Main>
      </Layout>
    )
  }
}

const Supporters = props => {
  const { supporters } = props
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
        <div />
      )}
    </Section>
  )
} // TODO break out - same as one on playlist page
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
`
const Section = styled.section`
  margin-top: 3rem;
  width: 100%;
`
const SectionTitle = styled.h3`
  color: ${props => props.theme.darkestGrey};

  margin: 0 auto;
  padding-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: 600;

  text-transform: uppercase;
`
const BuyButton = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 6.4rem;

  display: flex;

  &:hover {
    cursor: pointer;
  }
`
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
`
const BuyMenu = styled.button`
  background-color: ${props => props.theme.darkGreen};

  flex: 1;
  border-radius: 0 6px 6px 0;

  border: none;
  outline: none;
`
const LeftContent = styled.div`
  width: 31%;
`
const RightCotent = styled.div`
  width: 65%;
  background-color: #e4e4e4;
` // TODO break out same as in profile
const Main = styled.main`
  width: ${props => props.theme.contentWidth};
  margin-top: 6rem;
  width: 100%;
  padding: 0 3rem;

  text-align: left;
`
const NoSupporters = styled.p`
  color: ${props => props.theme.darkGrey};
  font-size: 1.4rem;
`
Playlist.getInitialProps = async () => {
  const playlist = {
    title: 'Walk Tall',
    artwork: 'https://i1.sndcdn.com/artworks-000174984121-jlksuw-t500x500.jpg',
    price: 5.99,
    currency: 'GBP',
    tracks: [],
    supporters: [],
    artist: {
      id: 1,
      name: 'Mabel',
      username: 'mabel',
    },
  }
  return { playlist }
}
export default Playlist
