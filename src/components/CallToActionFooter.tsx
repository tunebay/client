import React, { Component } from 'react';
import styled from '../lib/theme';

import { Button } from './common';

export default class extends Component {
  render() {
    return (
      <CallToActionFooter>
        <ContentBox>
          <Title>Start being heard today.</Title>
          <Tag>
            A line targeted towards creators that make them want to click the call to
            action button.
          </Tag>
          <Button>Create account.</Button>
        </ContentBox>
      </CallToActionFooter>
    );
  }
}

const CallToActionFooter = styled.div`
  background-color: ${props => props.theme.deepBlue};
  color: ${props => props.theme.white};

  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);

  height: 65vh;
  margin: 10rem 3rem 0 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled.div`
  max-width: 55rem;
  margin: 0 0 4rem 10rem;
`;

const Title = styled.h3`
  font-size: 4.2rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  padding-bottom: 1.5rem;
`;

const Tag = styled.h4`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 400;
  padding-bottom: 2rem;
`;
