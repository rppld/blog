import * as React from 'react'
import device from '../theme/device'

const links = [
  { name: 'Instagram', href: 'https://www.instagram.com/philipprappold/' },
  { name: 'Twitter', href: 'https://twitter.com/rppld' },
  { name: 'Email', href: 'mailto:philipprappold@me.com' },
]

const Footer: React.FunctionComponent = () => (
  <footer>
    <div className="footer-inner">
      <p>&copy; {new Date().getFullYear()} Philipp Rappold</p>

      <ul>
        {links.map(link => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      footer {
        font-family: var(--ff-mono);
        width: 100%;
        pointer-events: none;
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        padding-top: var(--space-96);
        padding-bottom: var(--space-8);
      }

      .footer-inner {
        border-top: 2px solid var(--color-input-border);
        padding-top: var(--space-8);
        padding-bottom: env(safe-area-inset-bottom);
      }

      div > * {
        pointer-events: auto;
      }

      li {
        display: inline;
      }

      li + li {
        margin-left: var(--space-16);
      }

      div a {
        font-family: var(--ff-mono);
        text-decoration: none;
        color: inherit;
        transition: opacity 400ms;
        background-color: transparent;
        border: 0;
      }

      div a:hover,
      div a:focus {
        opacity: 0.5;
        background-color: transparent;
      }

      @media ${device.tablet} {
        footer {
          padding-left: var(--space-24);
          padding-right: var(--space-24);
        }

        li + li {
          margin-left: var(--space-32);
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </footer>
)

export default Footer
