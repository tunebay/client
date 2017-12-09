// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout, { Grid } from '../components/Layout'
import type { UserType } from '../types'

import { aspectRatio } from '../lib/styleUtils'

type Props = {|
  user: UserType,
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
              <FollowButton>Follow</FollowButton>
            </User>
            <Playlists>
              <Grid>
                {user.playlists.map(playlist => (
                  <Playlist key={playlist.id} image={playlist.artwork} />
                ))}
              </Grid>
            </Playlists>
          </Grid>
        </Main>
      </Layout>
    )
  }
}

const FollowButton = styled.button`
  background-color: ${props => props.theme.primaryRed};
  color: ${props => props.theme.white};

  height: 3.6rem;
  width: 12rem;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.3rem;
  transition: all 75ms ease-out;

  letter-spacing: inherit;
  border: none;
  outline: none;
  font-family: inherit;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkRed};
  }
`

export const Main = styled.main`
  margin-top: 5rem;
  width: 100%;
  padding: 0 3rem;
  text-align: left;
`

const Playlist = styled.div`
  background-image: url(${props => props.image});
  box-shadow: ${props => props.theme.boxShadow};

  width: 30.5%;
  margin-bottom: 3rem;
  background-color: #e4e4e4;
  border-radius: 6px;

  background-size: cover;

  ${aspectRatio('100%')};
`

const User = styled.div`
  margin-top: -11rem;
  width: 24%;
`

const Name = styled.h1`
  padding-top: 2rem;
  font-size: 3rem;
  font-weight: 900;
`

const Bio = styled.p`
  font-size: 1.5rem;
  padding: 1.2rem 0;
  line-height: 1.4;
`

const ProfilePicture = styled.button`
  background-image: url(${props => props.photo});
  box-shadow: ${props => props.theme.boxShadow};

  border: none;
  outline: none;
  width: 80%;
  ${aspectRatio('100%')};
  background-size: cover;
  transition: all 300ms ease-out;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
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
    playlists: [
      {
        id: 1,
        title: 'Ivy To Roses',
        artwork:
          'https://i2.wp.com/s1.xclusivejams.com/2017/10/Mabel-Ivy-To-Roses-Mixtape-iTunes-Plus-M4A.jpg?w=640&ssl=1',
      },
      {
        id: 2,
        title: 'My Boy My Town',
        artwork:
          'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/58/6e/51/586e51d3-6175-c286-a06b-7f2d007875f2/15UMGIM65453.jpg/1200x630bb.jpg',
      },
      {
        id: 3,
        title: 'Thinking Of You',
        artwork:
          'https://images.genius.com/122c310b162d72c5d271d32753b5fa60.630x630x1.jpg',
      },
    ],
  }
  return { user }
}
export default Profile
