import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink username="malimichael" title="Mali Michael" />
      <PostLink username="space" title="Space" />
      <PostLink username="rudehealth" title="Rude Health" />
    </ul>
  </Layout>
)

const PostLink = props => (
  <li>
    <Link as={props.username} href={`/user?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
