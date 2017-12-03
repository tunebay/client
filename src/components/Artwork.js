// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import { boxShadow } from '../lib/styleUtils'

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
          <PlayButton onClick={() => console.log('play')}>
            <Play fill="#fff" />
          </PlayButton>
        </Overlay>
      </Artwork>
    )
  }
}

const Artwork = styled.div`
  background-image: url(${props => props.image});

  width: 100%;
  border-radius: 6px;

  background-size: cover;
  position: relative;
  overflow: hidden;

  ${boxShadow()};

  &::before {
    content: '';
    display: block;
    padding-top: 100%; /* initial ratio of 1:1*/
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > * {
    visibility: visible;
  }
`

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
`

const PlayButton = styled.button`
  background-color: ${props => props.theme.primaryRedOpacity(0.98)};

  height: 6rem;
  width: 6rem;
  border-radius: 500px;
  transition: all 75ms ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  ${boxShadow()};

  &:hover {
    background-color: ${props => props.theme.darkRed};
    cursor: pointer;
  }
`
