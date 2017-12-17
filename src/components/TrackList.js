// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import type { TrackType } from '../types';

import PricePill from './PricePill';

type Props = {|
  tracks: Array<TrackType>,
|};

export default class extends Component<Props, void> {
  render() {
    const { tracks } = this.props;

    return (
      <TrackList>{tracks.map(track => <Track track={track} />)}</TrackList>
    );
  }
}

const Track = props => {
  const { position, name, price, duration } = props.track;
  const isEven = position % 2 === 0;
  return (
    <Row isEven={isEven}>
      <Position>{position}</Position>
      <Name>{name}</Name>
      <Duration>{duration}</Duration>
      <Price>
        {price ? (
          <PricePill price={price} onClick={() => console.log('Clicked')} />
        ) : (
          'N/A'
        )}
      </Price>
    </Row>
  );
};

const Row = styled.li`
  background-color: ${({ isEven, theme }) =>
    isEven ? theme.white : theme.lightestGrey};

  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.span`
  font-size: 1.6rem;
  flex: 24;
  font-weight: 500;
`;

const Position = styled.span`
  color: ${props => props.theme.darkestGrey};
  display: flex;
  justify-content: center;

  flex: 1;
  padding: 0 2rem;
  font-weight: 500;
`;

const Duration = styled.span`
  flex: 3;
`;

const Price = styled.span`
  flex: 3;
`;

const TrackList = styled.ul`
  padding-top: 3rem;
`;
