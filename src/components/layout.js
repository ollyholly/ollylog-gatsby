import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;600&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Add other default styles as needed */
`;


const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const Menu = styled.nav`
  width: 100%;
  display: flex;
  direction: row;
  align-items: center;
`
const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
`

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
  site {
    siteMetadata {
      title
    }
  }
}
`)

  return (
    <>
    <GlobalStyles />
    <Container>
      <Menu>
        <header><Link to="/">{data.site.siteMetadata.title}</Link></header>
        <MenuList>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </MenuList>
      </Menu>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Container>
    </>
  )
}

export default Layout