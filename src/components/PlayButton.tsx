import React, { Component } from 'react';

import styled from '../lib/theme';

import { Play } from './icons';

interface Props {
  onClick(): any;
  size?: number;
}

export default class extends Component<Props> {
  render() {
    const { onClick, size } = this.props;

    return (
      <PlayButton size={size} onClick={onClick}>
        <Play fill="#fff" />
      </PlayButton>
    );
  }
}

const PlayButton = styled.button`
  background-color: ${props => props.theme.primaryRedOpacity(0.98)};
  height: ${props => (props.size ? `${props.size / 10}rem` : '6rem')};
  width: ${props => (props.size ? `${props.size / 10}rem` : '6rem')};
  box-shadow: ${props => props.theme.boxShadow};

  border-radius: 500px;
  transition: all 75ms ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.darkRed};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;
