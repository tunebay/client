import React, { Component } from 'react';
import styled from 'styled-components';

import PricePill from './PricePill';

// interface Props {
//   tracks: TrackType>;
// };

export default class extends Component {
  render() {
    const { tracks } = this.props;

    return (
      <TrackList>{tracks.map(track => <Track key={track.id} track={track} />)}</TrackList>
    );
  }
}

const Track = props => {
  const { playlistPosition, title, price, duration } = props.track;
  const isEven = playlistPosition % 2 === 0;
  return (
    <Row isEven={isEven}>
      <Position>{playlistPosition}</Position>
      <Name>{title}</Name>
      <Duration>{duration}</Duration>
      <Price>
        {price ? (
          <PricePill price={price} onClick={() => console.log('Clicked')} />
        ) : (
          'N/A' // TODO playlist type?
        )}
      </Price>
    </Row>
  );
};

const Row = styled.li`
  background-color: ${({ isEven, theme }) => (isEven ? theme.white : theme.lightestGrey)};

  width: 100%;
  height: 5rem;
  font-size: 1.4rem;
  transition: all 100ms ease-out;
  padding: 0 2rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-radius: 3px;

    cursor: pointer;
  }
`;

const Name = styled.span`
  flex: 25;
`;

const Position = styled.span`
  color: ${props => props.theme.darkestGrey};

  display: flex;
  justify-content: center;

  flex: 1;
  padding-right: 2rem;
`;

const Duration = styled.span`
  color: ${props => props.theme.darkestGrey};

  flex: 2.5;
`;

const Price = styled.span`
  flex: 3;
`;

const TrackList = styled.ul`
  padding-top: 3rem;
`;
