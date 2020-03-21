import * as React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import NavLink from './NavLink'
import device from '../theme/device'

const Header: React.FunctionComponent = props => (
  <header>
    <NavBar>
      <div>
        <span>
          <Link href="/" passHref>
            <NavLink>Philipp Rappold</NavLink>
          </Link>
        </span>
        <span>—</span>
        <span>Developer</span>
      </div>
    </NavBar>

    <style jsx>{`
      header {
        padding-top: var(--space-16);
        padding-bottom: var(--space-16);
        background-color: white;
        border-bottom: 2px solid var(--color-body);
      }

      div {
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
      }

      @media ${device.tablet} {
        div {
          padding-left: var(--space-32);
          padding-right: var(--space-32);
        }
      }

      @media ${device.laptop} {
        div {
          padding-left: var(--space-64);
          padding-right: var(--space-64);
        }
      }
    `}</style>
  </header>
)

export default Header
