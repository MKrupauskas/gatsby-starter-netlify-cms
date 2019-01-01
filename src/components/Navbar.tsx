import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 100;
  background: white;
  padding: 1rem;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  margin-left: 1rem;
`

class Navbar extends React.Component {
  render() {
    return (
      <Navigation role="navigation" aria-label="main-navigation">
        <div>
          <Link to="/">
            Home
          </Link>
          <div>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div>
          <StyledLink to="/about">
            About
          </StyledLink>
          <StyledLink to="/projects">
            Projects
          </StyledLink>
          <StyledLink to="/products">
            Products
          </StyledLink>
          <StyledLink to="/contact">
            Contact
          </StyledLink>
          <StyledLink to="/contact/examples">
            Form Examples
          </StyledLink>
        </div>
      </Navigation>
    )
  }
}

export default Navbar
