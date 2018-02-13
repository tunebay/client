// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  fill: string,
|};

export default (props: Props) => {
  const { fill } = props;
  return (
    <Play>
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <title>Triangle 2</title>
        <defs />
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Home-/-Playlist-Hovered"
            transform="translate(-126.000000, -123.000000)"
            fill={fill}
          >
            <polygon
              id="Triangle-2"
              transform="translate(138.000000, 135.000000) rotate(90.000000) translate(-138.000000, -135.000000) "
              points="138 123 150 147 126 147"
            />
          </g>
        </g>
      </svg>
    </Play>
  );
};

const Play = styled.div`
  padding-left: 2px;
  height: 24px;
  width: 24px;
`;
