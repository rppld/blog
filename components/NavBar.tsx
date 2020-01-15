import * as React from 'react'
import device from '../theme/device'

const NavBar: React.FunctionComponent = ({ children }) => (
  <nav>
    {children}

    <style jsx>{`
      nav {
        font-family: var(--ff-mono);
        width: 100%;
        pointer-events: none;
        padding-left: var(--space-16);
        padding-right: var(--space-16);
      }
      @media ${device.tablet} {
        nav {
          padding-left: var(--space-24);
          padding-right: var(--space-24);
        }
      }
    `}</style>
  </nav>
)

export default NavBar
