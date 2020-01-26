import * as React from 'react'

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  href?: string
}

const NavLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...props }, ref) => (
    <a ref={ref} {...props}>
      {children}

      <style jsx>{`
        a {
          font-size: var(--fs-16);
          font-family: var(--ff-mono);
          text-decoration: none;
          color: inherit;
          transition: opacity 400ms;
          background-color: transparent;
          border: 0;
          pointer-events: auto;
          cursor: pointer;
        }

        a:hover,
        a:focus {
          opacity: 0.5;
          background-color: transparent;
        }
      `}</style>
    </a>
  )
)

export default NavLink
