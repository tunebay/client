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
            <Toggle collapsed={collapsed} onClick={this.handleToggle}>
              <Chevron fill="#cccccc" size="1.8rem" />
            </Toggle>
          </Title>
          <SideNav>
            <NavItem>
              <Icon />
            </NavItem>
            <NavItem>
              <Icon />
            </NavItem>
            <NavItem>
              <Icon />
            </NavItem>
            <NavItem>
              <Icon />
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

const SideNav = styled.ul`
  margin-top: 2rem;
  width: 100%;
`;

const Content = styled.div`
  width: ${({ collapsed }) => (collapsed ? '4.5%' : '18%')};
  min-width: ${({ collapsed }) => (collapsed ? '7rem' : '21rem')};
  transition: all 200ms ease-out;
  position: fixed;
`;

const Toggle = styled.button`
  background-color: ${props => props.theme.deepBlue};
  transform: ${({ collapsed }) =>
    collapsed ? 'rotate(270deg)' : 'rotate(90deg)'};

  height: 2rem;
  width: 2rem;

  transition: all 200ms ease-out;

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;

  height: 6rem;
`;
