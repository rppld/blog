import * as React from 'react'
import device from '../theme/device'

const Intro: React.FunctionComponent = ({ children }) => (
  <div className="intro">
    {children}

    <style jsx>{`
      div {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        font-size: var(--fs-32);
        font-weight: var(--fw-black);
        line-height: var(--lh-title);
      }

      @media ${device.mobileLg} {
        div {
          padding-left: var(--space-32);
          padding-right: var(--space-32);
        }
      }

      @media ${device.tablet} {
        div {
          font-size: 4vw;
          padding-left: var(--space-64);
          padding-right: var(--space-64);
        }
      }
    `}</style>
  </div>
)

export default Intro
