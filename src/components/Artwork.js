// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import { media, boxShadow } from '../lib/styleUtils'

import { Play } from './svgs'

type Props = {|
  image: string,
|}

export default class extends Component<Props, void> {
  render() {
    const { image } = this.props
    return (
      <Artwork image={image}>
        <Overlay>
          <PlayButton>
            <Play fill="#fff" />
          </PlayButton>
        </Overlay>
      </Artwork>
    )
  }
}

const Artwork = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 27rem;
  width: 27rem;
  background-color: #ccc;
  border-radius: 6px;
  ${boxShadow()};
  transition: all 300ms ease-out;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  &:hover > * {
    visibility: visible;
  }

  ${media.desktop`
    height: 21vw;
    width: 21vw;
  `};
`

const PlayButton = styled.button`
  background-color: ${props => props.theme.primaryRedOpacity(0.98)};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  border-radius: 500px;
  transition: all 75ms ease-out;
  border: none;
  outline: none;
  ${boxShadow()};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkRed};
  }
`

const Overlay = styled.div`
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 80%,rgba(0,0,0,0.3) 100%); );
`
