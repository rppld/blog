import * as React from 'react'
import device from '../theme/device'

interface Props extends React.HTMLProps<HTMLParagraphElement> {}

const Text: React.FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <>
      <p {...props} />

      <style jsx>{`
        p {
          letter-spacing: var(--ls-1);
          font-weight: 400;
          font-size: var(--fs-18);
          padding-left: var(--space-16);
          padding-right: var(--space-16);
          margin: 0;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
          color: var(--color-near-black);
        }

        @media ${device.mobileLg} {
          p {
            font-size: var(--fs-20);
          }
        }

        @media ${device.tablet} {
          p {
            font-size: var(--fs-24);
            padding-left: var(--space-32);
            padding-right: var(--space-32);
          }
        }

        @media ${device.laptop} {
          p {
            padding-left: var(--space-64);
            padding-right: var(--space-64);
          }
        }
      `}</style>
    </>
  )
}

export default Text
