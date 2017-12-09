// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

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
        <Cover photo={user.cover} />
      </Layout>
    )
  }
}

const Cover = styled.div`
  background-image: url(${props => props.cover});
`

Profile.getInitialProps = async () => {
  const user = {
    name: 'Mabel',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000161652148-8uID1y-t2480x520.jpg',
    photo: 'https://i1.wp.com/www.warmneasy.c06/mabel07.jpg?fit=800%2C561',
  }
  return { user }
}
export default Profile
