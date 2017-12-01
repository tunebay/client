import styled from 'styled-components'

import Header from './Header'

const Layout = props => (
  <StyledLayout>
    <Header />
    {props.children}
  </StyledLayout>
)

const StyledLayout = styled.div`
  margin: 30px;
  padding: 30px;
  border: 1px solid #ddd;
`

export default Layout
