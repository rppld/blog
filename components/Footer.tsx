import * as React from 'react'
import device from '../theme/device'
import NavBar from './NavBar'
import NavLink from './NavLink'

const links = [
  { name: 'Instagram', href: 'https://www.instagram.com/philipprappold/' },
  { name: 'Twitter', href: 'https://twitter.com/rppld' },
  { name: 'Email', href: 'mailto:philipprappold@me.com' },
]

const Footer: React.FunctionComponent = () => (
  <footer>
    <NavBar>
      <div>
        <p>&copy; {new Date().getFullYear()} Philipp Rappold</p>

        <ul>
          {links.map(link => (
            <li key={link.name}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </NavBar>

    <style jsx>{`
      footer {
        padding-top: var(--space-96);
        padding-bottom: var(--space-16);
        background-color: white;
      }

      div {
        border-top: 1px solid var(--color-input-border);
        padding-top: var(--space-16);
        padding-bottom: env(safe-area-inset-bottom);
      }

      p {
        color: var(--color-text-meta);
      }

      li {
        display: inline;
      }

      li + li {
        margin-left: var(--space-16);
      }

      @media ${device.tablet} {
        li + li {
          margin-left: var(--space-32);
        }

        div {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </footer>
)

export default Footer
