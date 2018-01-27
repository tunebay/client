// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

type Props = {||};

class Upload extends Component<Props> {
  render() {
    return (
      <Layout subNavigation title="Upload">
        <Main>
          <Dropzone>
            <Title>Upload your muisc.</Title>
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
  height: 46rem;
  border-color: #ccc;
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
  border: none;

  border-radius: 500px;
`;

export default Upload;
