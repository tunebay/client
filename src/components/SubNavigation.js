// @flow
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// type Props = {|
//   activePath:
//     | '/upload'
//     | '/you/music'
//     | '/you/sales'
//     | '/you/stats'
//     | '/upgrade',
// |};

type SubNavRouteType = {|
  name: string,
  path: string,
|};

type Props = {
  type: 'upload' | 'profile' | 'discover',
  routes: Array<SubNavRouteType>,
  rightComponent?: React.Node, // settings cog | upgrade

  activePath: string,
};

export default class extends React.Component<Props> {
  render() {
    const { activePath, routes = [] } = this.props;

    // TODO revise this component, look into right way to do subnavigation with next
    // also unify this so it works with profile subnav

    // TODO set these values in theme
    // profileUserWidth 21%
    // profilePlaylistWidth 74%

    // TODO connect with redux to control active link?

    return (
      <SubNavigation>
        {this.props.type === 'upload' ? <Title>Upload</Title> : null}
        <Links>
          {routes.map(({ name, path }) => (
            <SubNavLink key={name} active={activePath === path} href={path}>
              {name}
            </SubNavLink>
          ))}
        </Links>
        {this.props.type === 'upload' ? <Upgrade>Upgrade</Upgrade> : null}
      </SubNavigation>
    );
  }
}

const SubNavLink = ({ children, href, active }) => (
  <Link href={href}>
    <LinkItem active={active}>{children}</LinkItem>
  </Link>
);

const SubNavigation = styled.nav`
  background-color: ${props => props.theme.lightestGrey};

  width: 100%;
  height: 6rem;
  padding: 0 6rem;
  /* position: fixed; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.ul`
  height: 100%;
  width: 104rem;

  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.deepBlue};
  font-size: 2rem;
  font-weight: 700;
`;

const LinkItem = styled.div`
  border-bottom: ${props =>
    props.active
      ? `2px solid ${props.theme.primaryRed}`
      : '2px solid transparent'};
  height: 100%;
  align-items: center;
  display: flex;
  padding: 0 0.4rem;
  margin-right: 3rem;
  padding-top: 4px;
  font-weight: 500;

  font-size: 1.3rem;

  text-transform: capitalize;

  &:hover {
    border-bottom: ${props =>
      props.active
        ? `2px solid ${props.theme.primaryRed}`
        : `2px solid ${props.theme.deepBlue}`};

    cursor: pointer;
  }
`;

const Upgrade = styled.h2`
  color: ${props => props.theme.primaryRed};

  font-size: 1.3rem;
  font-weight: 600;

  text-transform: uppercase;
`;
