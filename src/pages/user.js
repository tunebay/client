// @flow
import React from 'react'

import Layout from '../components/Layout'

const User = (props: {
  show: {
    name: string,
    summary: string,
    image: { medium: string },
  },
}) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img alt={props.show.name} src={props.show.image.medium} />
  </Layout>
)

// User.getInitialProps = async function(context) {
//   const { id } = context.query
//   const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
//   const show = res.data
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }

export default User
