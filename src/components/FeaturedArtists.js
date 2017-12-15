// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { aspectRatio } from '../lib/styleUtils'

import { Grid } from './Layout'
import { Button } from './common'

type Props = {||}

const featuredArtists = [
  {
    id: 4,
    name: 'Kwabs',
    username: 'kwabs',
    image: 'http://www.mobo.com/sites/default/files/Kwabs-Press1-.jpg',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 1,
    name: 'Taya',
    username: 'taya',
    image: 'https://s3.eu-west-2.amazonaws.com/tunebay/taya.jpg',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    name: 'Super-organism',
    username: 'superorganism',
    image: 'https://s3.eu-west-2.amazonaws.com/tunebay/super.jpg',
    bio:
      "Stupidly fun, sample-happy and eight members strong, Superorganism are a force for good.\n \nDebut single 'Something For Your M.I.N.D.' proudly boasts the collective's skill in making saccharine, sense-zapping pop without the cheese.",
  },
  {
    id: 2,
    name: 'Dan Shake',
    username: 'danshake',
    image: 'https://s3.eu-west-2.amazonaws.com/tunebay/Dan-Shake-2.jpg',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

class FeaturedArtists extends Component<Props, void> {
  render() {
    return (
      <Grid width={1320}>
        {featuredArtists.map(({ image, bio, name, id, username }) => (
          <ArtistCard key={id}>
            <CardFront image={image}>{name}</CardFront>
            <CardBack>
              <Name>{name}</Name>
              <Bio>
                {bio.split('\n').map((item, key) => (
                  // lol TODO better key solution
                  <span key={`${`${key}`}-bio}`}>
                    {item}
                    <br />
                  </span>
                ))}
              </Bio>
              <Link
                prefetch
                as={username}
                href={`/profile?username=${username}`}
              >
                <Button>Go to profile.</Button>
              </Link>
            </CardBack>
          </ArtistCard>
        ))}
      </Grid>
    )
  }
}

const ArtistCard = styled.div`
  perspective: 150rem;
  width: 23.7%;
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

  overflow: hidden;
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
  padding-bottom: 2rem;

  text-transform: uppercase;
`

const Bio = styled.p`
  font-size: 1.3rem;
  width: 100%;
  line-height: 1.6;
  flex: 1;

  text-align: left;
`

export default FeaturedArtists
