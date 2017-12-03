// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HotRightNow from '../components/HotRightNow'
import PlayButton from '../components/PlayButton'
import Grid from '../components/Grid'

import { boxShadow } from '../lib/styleUtils'

type Props = {||}

class Index extends Component<Props, void> {
  render() {
    return (
      <Layout>
        <Hero />

        <HotrightNowSection>
          <Title>Hot right now</Title>
          <HotRightNow />
        </HotrightNowSection>

        <ForTheLoveOfMusic>
          <Grid>
            <Left>Hello Left</Left>
            <Right>
              <PlayButton
                size={70}
                onClick={() => console.log('load and play video')}
              />
            </Right>
          </Grid>
        </ForTheLoveOfMusic>
      </Layout>
    )
  }
}
const HotrightNowSection = styled.section`
  width: 100%;
  height: 40.5rem;
  padding: 0 3rem;
  margin-bottom: 6rem;

  text-align: center;
`
const Title = styled.h3`
  margin: 0 auto;
  padding-bottom: 6rem;
  font-size: 1.4rem;
  font-weight: 600;

  text-transform: uppercase;
`
const ForTheLoveOfMusic = styled.section`
  background-color: ${props => props.theme.lightestGrey};

  width: 100%;
  height: 95vh;
  padding: 6rem 3rem;
  position: relative;

  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
`

const Left = styled.div`
  background-color: red;
  width: 48%;
`
const Right = styled.button`
  /* background-image: url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'); */
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.lighterGrey};

  width: 48%;
  top: 3rem;
  bottom: 0;
  right: 0;
  height: 75%;
  border-radius: 6px 0 0 6px;
  padding-left: 12rem; /* Make content look centered */

  background-size: cover;
  position: absolute;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  ${boxShadow()};
`
export default Index
