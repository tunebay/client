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
            <Left>
              <SectionTitle>For the love of music.</SectionTitle>
              <SectionDescription>
                Imagine a great paragraph that points out how Tunebay is all
                about putting the artist first. How anyone that uploads their
                music controls all their rights and royalties. How you get to
                set the price of albums and how we understand that for many
                artists music is much more than just an art form, its their
                livelihood.
              </SectionDescription>
            </Left>
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
  align-items: center;
  width: 48%;
  padding-top: 7rem;
`

const SectionTitle = styled.h2`
  padding-bottom: 3rem;
  font-weight: 700;
  font-size: 4.8rem;
`

const SectionDescription = styled.p`
  line-height: 1.7;
  font-size: 1.8rem;
`

const Right = styled.div`
  background-image: url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
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
