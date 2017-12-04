// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import { aspectRatio } from '../lib/styleUtils'

import Grid from './Grid'
import { Button } from './common'

type Props = {||}

const featuredArtists = [
  {
    id: 1,
    name: 'Mabel',
    image: 'https://vg-images.condecdn.net/image/P3eJ4y3QoA9/crop/1020',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    name: 'Minx',
    image:
      'https://static1.squarespace.com/static/5820f18a6b8f5b12160bf8d4/583211efc534a553942e0b96/583212069de4bb0ca85df473/1479676455578/DSC_8344+copylogo.jpg?format=1000w',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    name: 'Super-organism',
    image:
      'https://cdn.mbw.44bytes.net/files/2017/11/Screen-Shot-2017-11-08-at-08.59.52.jpg',
    bio:
      "Stupidly fun, sample-happy and eight members strong, Superorganism are a force for good.\n \nDebut single 'Something For Your M.I.N.D.' proudly boasts the collective's skill in making saccharine, sense-zapping pop without the cheese.",
  },
  {
    id: 4,
    name: 'Michael Kiwanuka',
    image: 'https://i.scdn.co/image/33071f161f9a57c639a6707f84498152b0c3e015',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

class FeaturedArtists extends Component<Props, void> {
  render() {
    return (
      <Grid width={1310}>
        {featuredArtists.map(({ image, bio, name, id }) => (
          <ArtistCard key={id}>
            <CardFront image={image}>{name}</CardFront>
            <CardBack>
              <Avatar image={image} />
              <Name>{name}</Name>
              <Bio>
                {bio.split('\n').map((item, key) => (
                  <span>
                    {item}
                    <br />
                  </span>
                ))}
              </Bio>
              <Button>Go to profile.</Button>
            </CardBack>
          </ArtistCard>
        ))}
      </Grid>
    )
  }
}

const ArtistCard = styled.div`
  perspective: 150rem;
  width: 23%;
  position: relative;

  ${aspectRatio('150%')};
`

const CardSide = styled.div`
  box-shadow: ${props => props.theme.boxShadow};

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: all 500ms ease;

  backface-visibility: hidden;
  position: absolute;
`

const CardFront = CardSide.extend`
  background-image: url(${props => props.image});
  color: ${props => props.theme.white};

  padding: 1rem;
  font-size: 3.6rem;
  font-weight: 800;
  text-shadow: 2px 2px rgba(26, 30, 40, 0.7);

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${ArtistCard}:hover & {
    transform: rotateY(180deg);
  }
`

const CardBack = CardSide.extend`
  background-color: ${props => props.theme.deepBlue};
  color: ${props => props.theme.white};

  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: rotateY(-180deg);

  ${ArtistCard}:hover & {
    transform: rotateY(0);
  }
`

const Name = styled.h3`
  font-size: 3.2rem;
  width: 100%;
  font-weight: 800;
  padding-bottom: 1.5rem;

  text-transform: uppercase;
`

const Bio = styled.p`
  font-size: 1.3rem;
  width: 100%;
  line-height: 1.7;
  flex: 1;

  text-align: left;
`

const Avatar = styled.div`
  background-image: ${props => props.image};

  height: 60px;
  width: 60px;
  border-radius: 500px;

  background-size: cover;
`

export default FeaturedArtists
