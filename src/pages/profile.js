// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Grid from '../components/Grid'

import { aspectRatio } from '../lib/styleUtils'

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

        <Section>
          <Grid>
            <User>
              <ProfilePicture photo={user.photo} />
              <Name>{user.name}</Name>
            </User>
            <Playlists />
          </Grid>
        </Section>
      </Layout>
    )
  }
}

const Section = styled.section`
  width: 100%;
  padding: 0 3rem;
  margin-bottom: 6rem;

  text-align: center;
`

const User = styled.div`
  background-color: pink;
  width: 24%;
  text-align: left;
`

const Name = styled.h1``

const ProfilePicture = styled.div`
  background-image: url(${props => props.photo});
  box-shadow: ${props => props.theme.boxShadow};

  width: 80%;
  ${aspectRatio('100%')};
  background-size: cover;
  border-radius: 100%;
`

const Playlists = styled.div`
  background-color: green;
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
