import * as React from 'react';

import styled from 'styled-components';
import { ReactNode } from 'react-redux';

interface Props {
  children: ReactNode;
  size: number;
  name: string;
}

export default ({ children, size, name }: Props) => (
  <Span aria-label={name} role="img" size={size}>
    {children}
  </Span>
);

const Span = styled.span`
  font-size: ${props => props.size}rem;
`;
