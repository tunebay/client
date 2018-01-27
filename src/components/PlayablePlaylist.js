// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { media, truncate } from '../lib/styleUtils';

import Artwork from './Artwork';

// TODO use server data and add photo to next to name

type Props = {|
  artwork: string,
  title: string,
  artist: string,
|};

export default class extends Component<Props> {
  render() {
    const { artwork, title, artist } = this.props;
    return (
      <PlayablePlaylist onClick={() => console.log('navigate')}>
        <Artwork image={artwork} />
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </PlayablePlaylist>
    );
  }
}

const PlayablePlaylist = styled.a`
  width: 22%;

  text-align: left;

  ${media.break2`
    width: 30%;

    &:last-child {
      display: none;
    }
  `};

  ${media.break3`
    width: 48%;

    &:last-child {
      display: block;
    }
  `};

  ${media.break4`
    width: 100%;

    &:last-child {
      display: block;
    }
  `};
`;

const Title = styled.div`
  padding-top: 1rem;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.6;

  text-transform: capitalize;

  ${truncate('100%')};
`;

const Artist = styled.div`
  color: ${props => props.theme.darkGrey};

  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.6;

  ${truncate('100%')};

  &:hover {
    color: ${props => props.theme.darkestGrey};
    cursor: pointer;
  }
`;
