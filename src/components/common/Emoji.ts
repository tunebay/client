// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  children: React.Node,
  size: number,
  name: string,
|};

export default ({ children, size, name }: Props) => (
  <Span aria-label={name} role="img" size={size}>
    {children}
  </Span>
);

const Span = styled.span`
  font-size: ${props => props.size}rem;
`;
