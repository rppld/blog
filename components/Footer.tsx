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
        <p>&copy; {new Date().getFullYear()} rppld.com</p>

        {links.map(link => (
          <NavLink key={link.name} href={link.href}>
            {link.name}
          </NavLink>
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

      p {
        color: var(--color-text-meta);
      }

      a + a {
        margin-left: var(--space-16);
      }

      @media ${device.tablet} {
        a + a {
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
