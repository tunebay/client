import React, { Component } from 'react';

import styled, { withProps } from '../lib/theme';
import { aspectRatio } from '../lib/styleUtils';

import { Grid } from './Layout';
import ProfileLink from './ProfileLink';

interface Props {
  count: number;
}

const featuredArtists = [
  {
    id: 4,
    name: 'Kwabs',
    username: 'kwabs',
    image: 'http://www.mobo.com/sites/default/files/Kwabs-Press1-.jpg',
  },
  {
    id: 1,
    name: 'Taya',
    username: 'taya',
    image: 'https://s3.eu-west-2.amazonaws.com/tunebay/taya.jpg',
  },
  {
    id: 3,
    name: 'Super-organism',
    username: 'superorganism',
    image: 'https://s3.eu-west-2.amazonaws.com/tunebay/super.jpg',
  },
  {
    id: 2,
    name: 'Dan Shake',
    username: 'danshake',
    image: 'https://s3.eu-west-2.amazonaws.com/tunebay/Dan-Shake-2.jpg',
  },
  {
    id: 5,
    name: 'Lion Babe',
    username: 'lionbabe',
    image:
      'https://cdn.shopify.com/s/files/1/1269/9037/products/170226_LB_Shot_03_869_1024x1024.jpg?v=1488920997',
  },
];

class FeaturedArtists extends Component<Props> {
  render() {
    const { count } = this.props;
    const cardWidth = 100 / count - 1;
    return (
      <Grid width={1320}>
        {featuredArtists.slice(0, count).map(({ image, name, id, username }) => (
          <ProfileLink key={id} username={username}>
            <ArtistCard key={id} width={cardWidth}>
              <CardFront image={image} />
              <Name>{name}</Name>
            </ArtistCard>
          </ProfileLink>
        ))}
      </Grid>
    );
  }
}

const ArtistCard = withProps<{ width: number }>()(styled.div)`
  perspective: 150rem;
  width: ${props => props.width}%;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  transition: all 800ms ease;

  ${aspectRatio('150%')};
`;

const CardSide = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 800ms ease-out;

  overflow: hidden;
  position: absolute;

  &:hover {
    transform: scale(1.04);
  }
`;

const Name = styled.h4`
  position: absolute;

  background-color: transparent;

  color: white;
  font-size: 2.8rem;
  font-weight: 900;
  text-shadow: 2px 2px rgba(26, 30, 40, 0.7);
`;

const CardFront = withProps<{ image: string }>()(CardSide.extend)`
  background-image: url(${props => props.image});
  color: ${props => props.theme.white};

  padding: 1rem;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
  /*
  ${ArtistCard}:hover & {
    transform: rotateY(180deg);
  }
  */
`;

export default FeaturedArtists;
