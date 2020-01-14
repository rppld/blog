import * as React from 'react'
import device from '../theme/device'
import Link from 'next/link'

const Header: React.FunctionComponent = () => (
  <header>
    <p>
      <Link href="/">
        <a>Philipp Rappold</a>
      </Link>
      , Developer
    </p>

    <style jsx>{`
      header {
        font-family: var(--ff-mono);
        width: 100%;
        pointer-events: none;
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        padding-top: var(--space-8);
      }

      header > * {
        pointer-events: auto;
      }

      header a {
        font-family: var(--ff-mono);
        text-decoration: none;
        color: inherit;
        transition: opacity 400ms;
        background-color: transparent;
        border: 0;
      }

      header a:hover,
      header a:focus {
        opacity: 0.5;
        background-color: transparent;
      }

      @media ${device.tablet} {
        header {
          padding-left: var(--space-24);
          padding-right: var(--space-24);
        }
      }

      @media ${device.laptop} {
        span {
          font-size: var(--fs-18);
        }
      }
    `}</style>
  </header>
)

export default Header
