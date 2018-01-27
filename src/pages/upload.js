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
          <Dropzone />
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
  border-color: #d6d6d6;
  border-width: 1px;
  border-style: dashed;
`;

export default Upload;
