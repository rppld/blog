import * as React from 'react'
import device from '../theme/device'

interface Props {
  bgColor?: string
}

const Banner: React.FunctionComponent<Props> = ({ children, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    let timeout
    if (!isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(true)
      }, 200)
    }
    return () => clearTimeout(timeout)
  }, [isVisible])

  return (
    <div className="banner">
      <div className={`content ${isVisible ? 'visible' : 'hidden'}`}>
        {children}
      </div>

      <style jsx>{`
        .content {
          min-height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--space-16);
          font-size: var(--fs-32);
          font-weight: var(--fw-black);
          line-height: var(--lh-title);
          letter-spacing: -0.035em;
          opacity: 0;
          transform: scale(0.9);
          transition-property: opacity, transform;
          transition-duration: 250ms;
          transition-timing-function: var(--ease-out-cubic);

          padding-left: var(--space-16);
          padding-right: var(--space-16);
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }

        .content.visible {
          opacity: 1;
          transform: scale(1);
        }

        @media ${device.tablet} {
          .content {
            padding-left: var(--space-32);
            padding-right: var(--space-32);
            font-size: 4vw;
          }
        }

        @media ${device.laptop} {
          .content {
            min-height: 65vh;
            padding-left: var(--space-64);
            padding-right: var(--space-64);
          }
        }
      `}</style>

      <style jsx>{`
        .banner {
          background-color: ${props.bgColor};
        }
      `}</style>
    </div>
  )
}

export default Banner
