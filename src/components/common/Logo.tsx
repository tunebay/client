import React, { Component } from 'react';

import styled from '../../lib/theme';

interface Props {
  size: number;
}

export default class extends Component<Props> {
  static defaultProps: Props;
  render() {
    const { size } = this.props;
    return (
      <Logo size={size}>
        <Image src="/static/logo.png" />
      </Logo>
    );
  }
}

const Logo = styled.div`
  height: ${props => (props.size ? `${props.size}px` : '36px')};
  /* TODO */
  width: ${props => (props.size ? `${props.size + 2}px` : '36px')};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
`;
