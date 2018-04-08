import * as React from 'react';
import { ReactNode } from 'react-redux';

import styled, { withProps } from '../../lib/theme';

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

const Span = withProps<{ size: number }>()(styled.span)`
  font-size: ${props => props.size}rem;
`;
