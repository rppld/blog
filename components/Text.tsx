import * as React from 'react'
import device from '../theme/device'

const Text: React.FunctionComponent = props => (
  <span>
    {props.children}

    <style jsx>{`
      span {
        hyphens: auto;
        letter-spacing: var(--ls-1);
        font-weight: 400;
        font-size: var(--fs-18);
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        margin-bottom: var(--space-32);
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
        color: var(--color-near-black);
      }

      @media ${device.mobileLg} {
        span {
          font-size: var(--fs-20);
        }
      }

      @media ${device.tablet} {
        span {
          font-size: var(--fs-24);
          padding-left: var(--space-32);
          padding-right: var(--space-32);
        }
      }

      @media ${device.laptop} {
        span {
          padding-left: var(--space-64);
          padding-right: var(--space-64);
        }
      }

      @media ${device.laptopLg} {
        span {
          font-size: var(--fs-28);
        }
      }
    `}</style>
  </span>
)

export default Text
