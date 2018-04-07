import React, { Component } from 'react';

import styled from '../lib/theme';
import { aspectRatio } from '../lib/styleUtils';

import PlayButton from './PlayButton';

interface Props {
  image: string;
}

export default class extends Component<Props> {
  render() {
    const { image } = this.props;

    return (
      <Artwork image={image}>
        <Overlay>
          <PlayButton onClick={() => console.log('play')} />
        </Overlay>
      </Artwork>
    );
  }
}

const Artwork = styled.div`
  background-image: url(${props => props.image});
  box-shadow: ${props => props.theme.boxShadow};

  width: 100%;
  border-radius: 6px;

  background-size: cover;
  position: relative;
  overflow: hidden;

  ${aspectRatio('100%')};

  &:hover {
    cursor: pointer;
  }

  &:hover > * {
    visibility: visible;
  }
`;

const Overlay = styled.div`
  transition: visibility 0s, opacity 0.5s linear;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 80%,rgba(0,0,0,0.3) 100%); );
`;
