// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  children: React.Node,
  color: string,
  spacing?: string,
|};

const NavLink = styled.a`
  color: ${props => (props.color ? props.color : props.theme.black)};
  padding-left: ${props => (props.spacing ? props.spacing : '3rem')};

  font-size: 1.3rem;
  font-weight: 800;
  line-height: 3rem;

  text-transform: uppercase;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default (props: Props) => <NavLink {...props} />;
