import * as React from 'react'
import device from '../theme/device'
import NavBar from './NavBar'
import NavLink from './NavLink'

const links = [
  { name: 'Twitter', href: 'https://twitter.com/rppld' },
  { name: 'GitHub', href: 'https://github.com/rppld' },
  { name: 'Email', href: 'mailto:philipprappold@me.com' },
]

const Footer: React.FunctionComponent = () => (
  <footer>
    <NavBar>
      <div>
        <p>&copy; {new Date().getFullYear()} rppld.com</p>

        {links.map((link) => (
          <span key={link.name}>
            <NavLink href={link.href}>{link.name}</NavLink>
          </span>
        ))}
      </div>
    </NavBar>

    <style jsx>{`
      footer {
        margin-top: var(--space-96);
        padding-bottom: var(--space-16);
        background-color: white;
        border-top: 1px solid var(--color-body);
      }

      div {
        padding-top: var(--space-16);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
      }

      p {
        color: var(--color-text-meta);
      }

      span + span {
        margin-left: var(--space-16);
      }

      @media ${device.tablet} {
        div {
          padding-left: var(--space-32);
          padding-right: var(--space-32);
          display: flex;
          justify-content: space-between;
        }

        span {
          margin-left: 0;
        }
      }

      @media ${device.laptop} {
        div {
          padding-left: var(--space-64);
          padding-right: var(--space-64);
        }
      }
    `}</style>
  </footer>
)

export default Footer
