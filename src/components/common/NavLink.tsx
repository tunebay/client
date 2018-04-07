import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  color: string;
  spacing?: string;
}

const NavLink = styled.a`
  color: ${props => (props.color ? props.color : props.theme.black)};
  padding-left: ${props => (props.spacing ? props.spacing : '3rem')};

  font-size: 1.3rem;
  font-weight: 700;
  line-height: 3rem;

  text-transform: uppercase;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default (props: Props) => <NavLink {...props} />;
