import axios from 'axios'
import Link from 'next/link'

import Layout from '../components/Layout'

const Index = props => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/${show.id}`} href={`/user?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const { data } = await axios.get(
    'https://api.tvmaze.com/search/shows?q=batman',
  )

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data,
  }
}

export default Index
