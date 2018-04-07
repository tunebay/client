import React, { Component } from 'react';

import Layout from '../components/Layout';
import SubNavigation from '../components/SubNavigation';
import withData from '../withData';

import styled from '../lib/theme';

class Upload extends Component {
  render() {
    return (
      <Layout title="Tunebay | Upload">
        <SubNavigation
          type="upload"
          routes={[
            { name: 'Upload', path: '/upload' },
            { name: 'Your Music', path: '/you/music' },
            { name: 'Stats', path: '/you/stats' },
            { name: 'Sales', path: '/you/sales' },
          ]}
          activePath="/upload" // TODO make this state in nav
        />
        <Main>
          <Dropzone>
            <Title>Upload your music.</Title>
            <Description>
              Drag & Drop audio files here or choose them from your computer
            </Description>
            <Button>Choose files</Button>
          </Dropzone>
        </Main>
      </Layout>
    );
  }
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Dropzone = styled.div`
  margin-top: 7rem;
  width: 104rem;
  height: 48rem;
  border-color: #999;
  border-width: 1px;
  border-style: dashed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 4.2rem;
  font-weight: 800;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  padding-bottom: 3rem;
  padding-top: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primaryRed};

  color: white;
  height: 5.4rem;
  width: 28rem;
  border-radius: 500px;
  transition: 75ms all ease;

  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkRed};
  }
`;

export default withData(Upload);
