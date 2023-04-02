import * as React from 'react'
import { Link } from 'gatsby'
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
`
const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <>
    <GlobalStyles />
    <Container>
      <Menu>
        <h1>Ollylog</h1>
        <MenuList>
          <li><Link to="/">Home</Link></li>
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