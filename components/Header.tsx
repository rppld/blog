import * as React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import NavLink from './NavLink'

const Header: React.FunctionComponent = () => (
  <header>
    <NavBar>
      <div>
        <span>
          <Link href="/" passHref>
            <NavLink>Philipp Rappold</NavLink>
          </Link>
        </span>
        <span>Developer</span>
      </div>
    </NavBar>

    <style jsx>{`
      header {
        padding-top: var(--space-16);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
      }

      div {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </header>
)

export default Header
