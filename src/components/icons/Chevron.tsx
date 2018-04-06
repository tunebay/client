import React from 'react';
import styled from 'styled-components';

interface Props {
  fill: string;
  size?: string; // '1.4rem'
  // TODO
  // rotation: 'up' | 'down' | 'left' | 'right'
}

export default (props: Props) => {
  const { fill, size } = props;
  return (
    <Chevron size={size}>
      <svg width="16px" height={size} viewBox="0 0 30 19" version="1.1">
        <title>Chevron</title>
        <defs />
        <g
          id="Chevron-Down-/-white"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(0.000000, -5.000000)"
        >
          <path
            d="M24.5251684,3.44966315 L14.1819384,13.7928932 C13.7914141,14.1834175 13.7914141,14.8165825 14.1819384,15.2071068 L24.5251684,25.5503369 L21.2574436,28.8180616 C20.8669193,29.2085859 20.2337544,29.2085859 19.8432301,28.8180616 L6.23227521,15.2071068 C5.84175091,14.8165825 5.84175091,14.1834175 6.23227521,13.7928932 L19.8432301,0.181938356 C20.2337544,-0.208585936 20.8669193,-0.208585936 21.2574436,0.181938356 L24.5251684,3.44966315 Z"
            id="Combined-Shape"
            fill={fill}
            transform="translate(15.025168, 14.500000) rotate(-90.000000) translate(-15.025168, -14.500000) "
          />
        </g>
      </svg>
    </Chevron>
  );
};

const Chevron = styled.span`
  height: ${props => (props.size ? props.size : '1.4rem')};
  width: ${props => (props.size ? props.size : '1.4rem')};

  display: flex;
  align-items: center;
  justify-content: center;
`;
