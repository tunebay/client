// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { media, truncate } from '../lib/styleUtils';

import Artwork from './Artwork';

type Props = {|
  artwork: string,
  title: string,
  artist: string,
|};

export default class extends Component<Props, void> {
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
  padding-top: 12px;
  font-size: 1.7rem;
  font-weight: 800;

  text-transform: capitalize;

  ${truncate('100%')};
`;

const Artist = styled.div`
  color: ${props => props.theme.darkGrey};

  font-weight: 400;
  font-size: 1.4rem;
  padding-top: 6px;

  ${truncate('100%')};
`;
