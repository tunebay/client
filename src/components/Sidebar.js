// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { Chevron } from '../components/svgs';

type Props = {||};

type State = {|
  collapsed: boolean,
|};

export default class extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  handleToggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sidebar collapsed={collapsed}>
        <Content collapsed={collapsed}>
          <Title>
            <Dashboard collapsed={collapsed}>Dashboard</Dashboard>
          </Title>
          <SideNav>
            <NavItem>
              <Icon />
              <Text>Upload</Text>
            </NavItem>
            <NavItem>
              <Icon />
              <Text>My Music</Text>
            </NavItem>
            <NavItem>
              <Icon />
              <Text>Statistics</Text>
            </NavItem>
            <NavItem>
              <Icon />
              <Text>Promote</Text>
            </NavItem>
          </SideNav>
        </Content>
      </Sidebar>
    );
  }
}

const Sidebar = styled.nav`
  flex: 0 0 ${({ collapsed }) => (collapsed ? '4.5%' : '18%')};
  min-width: ${({ collapsed }) => (collapsed ? '7rem' : '21rem')};

  background-color: ${props => props.theme.deepBlue};
  height: calc(100vh - ${props => props.theme.headerHeight});

  color: white;
  position: relative;

  transition: all 200ms ease-out;
`;

const Text = styled.h3`
  margin-left: 2rem;
  font-weight: 700;
  font-size: 1.3rem;
  text-transform: uppercase;
`;

const SideNav = styled.ul`
  margin-top: 2rem;
  width: 100%;
`;

const Content = styled.div`
  width: ${({ collapsed }) => (collapsed ? '4.5%' : '18%')};
  min-width: ${({ collapsed }) => (collapsed ? '7rem' : '21rem')};
  transition: all 200ms ease-out;
  background-color: ${props => props.theme.deepBlue};
  position: fixed;
  height: calc(100vh - ${props => props.theme.headerHeight});
`;

const Icon = styled.div`
  background-color: ${props => props.theme.grey};

  border-radius: 2px;
  height: 2rem;
  width: 2rem;
`;

const NavItem = styled.li`
  color: ${props => props.theme.grey};

  height: 5.4rem;
  width: 100%;
  padding: 2rem;
  transition: all 100ms ease;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.blackOpacity(0.5)};
    color: ${props => props.theme.white};

    cursor: pointer;
  }
`;

const Title = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.2);
  padding: 0 2rem;
  width: 100%;
  position: relative;

  height: 7rem;
`;

const Dashboard = styled.h2`
  opacity: ${props => (props.collapsed ? '0' : '1')};
  transform: ${props => (props.collapsed ? 'scale(0)' : 'scale(1)')};
  transform-origin: left;
  font-weight: 600;

  transition: all 200ms ease-out;
`;
