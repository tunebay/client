// @flow
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {|
  activePath:
    | '/upload'
    | '/you/music'
    | '/you/sales'
    | '/you/stats'
    | '/upgrade',
|};

export default class extends React.Component<Props> {
  render() {
    const { activePath } = this.props;

    const title = {
      '/upload': 'Upload',
      '/you/music': 'Your Music',
      '/upgrade': 'Upgrade',
      '/you/stats': 'Stats',
      '/you/sales': 'Sales',
    };

    return (
      <SubNavigation>
        <Title>{title[activePath]}</Title>
        <Links>
          <SubNavLink active={activePath === '/upload'} href="/upload">
            Upload
          </SubNavLink>
          <SubNavLink active={activePath === '/you/music'} href="you/music">
            Your Music
          </SubNavLink>
          <SubNavLink active={activePath === '/you/stats'} href="you/stats">
            Stats
          </SubNavLink>
          <SubNavLink active={activePath === '/you/sales'} href="you/sales">
            Sales
          </SubNavLink>
        </Links>
        <Upgrade>Upgrade</Upgrade>
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
  width: 100%;
  height: 6rem;
  padding: 0 6rem;
  /* position: fixed; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fafafa;
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
  font-size: 1.4rem;
`;
