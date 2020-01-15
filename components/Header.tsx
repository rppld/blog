import * as React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import NavLink from './NavLink'

const Header: React.FunctionComponent = () => (
  <header>
    <NavBar>
      <span>
        <Link href="/" passHref>
          <NavLink>Philipp Rappold</NavLink>
        </Link>
        , Developer
      </span>
    </NavBar>

    <style jsx>{`
      header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
      }
    `}</style>
  </header>
)

export default Header
