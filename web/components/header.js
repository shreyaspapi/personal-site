import Link from 'next/link'
import { useRouter } from 'next/router'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { Columns, below } from './layout'

const NavLink = styled.a`
  font: 700 16px Inter, sans-serif;
  text-decoration: none;
  appearance: none;
  color: ${colors.dark_grey};
  transition: color ease-in-out 200ms;
  transition: scale ease-in-out 200ms;
  :hover {
    cursor: pointer;
    color: ${colors.purplish};
  }
  :active {
    cursor: pointer;
    color: ${colors.dark_purplish};
    transform: scale(0.99);
    transform-origin: left;
  }
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1000px;
  /* width: 100%; */
  align-self: start;
  padding: 24px 0px;
  grid-column-gap: 16px;
  .active {
    color: ${colors.purplish};
  }
  ${below.med`
  padding: 16px 0px;
  `}
`

const Header = () => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <Nav>
      <NavLink
        className={pathname === '/' ? 'JustifyStart active' : 'JustifyStart'}
        href="/"
      >
        shreyaspapi.
      </NavLink>
      <Columns spacing={5} smallSpacing={2} className="JustifyEnd">
        <Link href="/things/">
          <NavLink className={pathname === '/things' && 'active'}>
            things i've built.
          </NavLink>
        </Link>
        <Link href="/writing/">
          <NavLink className={pathname === '/writing' && 'active'}>
            writing.
          </NavLink>
        </Link>
      </Columns>
    </Nav>
  )
}

Header.propTypes = {}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
