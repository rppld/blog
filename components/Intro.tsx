import * as React from 'react'
import device from '../theme/device'

interface Props {
  bgColor?: string
}

const Intro: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <div className="intro">
    {children}

    <style jsx>{`
      div {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: var(--space-16);
        font-size: var(--fs-32);
        font-weight: var(--fw-black);
        line-height: var(--lh-title);
      }

      @media ${device.mobileLg} {
        div {
          padding: var(--space-32);
        }
      }

      @media ${device.tablet} {
        div {
          font-size: 4vw;
          padding: var(--space-64);
        }
      }
    `}</style>

    <style jsx>{`
      div {
        background-color: ${props.bgColor};
      }
    `}</style>
  </div>
)

export default Intro
