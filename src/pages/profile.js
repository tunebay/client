// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout, { Grid, Section } from '../components/Layout'

import { aspectRatio, float } from '../lib/styleUtils'

type Props = {|
  user: {
    name: string,
    bio: string,
    cover: string,
    photo: string,
  },
|}

class Profile extends Component<Props, void> {
  static getInitialProps: () => any

  render() {
    const { user } = this.props
    return (
      <Layout>
        <Cover>
          <CoverPhoto src={user.cover} />
          <Overlay />
        </Cover>

        <Main>
          <Grid>
            <User>
              <ProfilePicture photo={user.photo} />
              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
            </User>
            <Playlists>
              <Grid>
                <Playlist />
                <Playlist />
                <Playlist />
              </Grid>
            </Playlists>
          </Grid>
        </Main>
      </Layout>
    )
  }
}

export const Main = styled.main`
  margin-top: 5rem;
  width: 100%;
  padding: 0 3rem;
  text-align: left;
`

const Playlist = styled.div`
  width: 30.5%;
  background-color: #f7f7f7;
  border-radius: 6px;

  ${aspectRatio('100%')};
`

const User = styled.div`
  margin-top: -10rem;
  width: 24%;
`

const Name = styled.h1`
  padding-top: 2rem;
  font-size: 3rem;
  font-weight: 900;
`

const Bio = styled.p`
  font-size: 1.5rem;
  padding: 1rem 0;
  line-height: 1.4;
`

const ProfilePicture = styled.button`
  background-image: url(${props => props.photo});
  box-shadow: ${props => props.theme.boxShadowFlat};

  border: none;
  outline: none;
  width: 75%;
  ${aspectRatio('100%')};
  background-size: cover;
  transition: all 300ms ease-out;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
    animation: ${float()} 1000ms infinite;
    animation-direction: alternate;
  }
`

const Playlists = styled.div`
  width: 73%;
  height: 50px;
`

const Cover = styled.header`
  position: relative;
  z-index: -1;
`

const CoverPhoto = styled.img`
  width: 100%;

  height: auto;
`

const Overlay = styled.div`
  height: 99%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  position: absolute;

  background-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.2));
`

Profile.getInitialProps = async () => {
  const user = {
    name: 'Mabel',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000161652148-8uID1y-t2480x520.jpg',
    photo: 'https://hamadamania.files.wordpress.com/2017/03/mabel08.jpg',
  }
  return { user }
}
export default Profile
