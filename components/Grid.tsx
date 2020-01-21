import * as React from 'react'
import device from '../theme/device'
import useIntersect from '../hooks/useIntersect'

interface Props {
  size?: string
}

export const GridItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  const [onScreen, setOnScreen] = React.useState(false)
  const [ref, entry] = useIntersect({
    rootMargin: '-32px',
  })

  React.useEffect(() => {
    if (entry?.isIntersecting || entry?.intersectionRatio > 0) {
      setOnScreen(true)
    } else {
      setOnScreen(false)
    }
  }, [entry])

  return (
    <div className={onScreen ? 'onscreen' : 'offscreen'} ref={ref}>
      {children}

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          transition-property: opacity, transform;
          transition-duration: 400ms;
          transition-timing-function: var(--ease-out-cubic);
          opacity: 0;
          transform: scale(0.9);
        }

        div.onscreen {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <style jsx>{`
        @media ${device.tablet} {
          div {
            grid-column: ${props.size === 'small'
              ? 'span 2'
              : props.size === 'medium'
              ? 'span 3'
              : 'span 5'};
          }
        }
      `}</style>
    </div>
  )
}

const Grid: React.FunctionComponent = ({ children }) => (
  <div className="grid">
    {children}

    <style jsx>{`
      div {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
      }

      @media ${device.tablet} {
        div {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 2rem;
        }
      }
      @media ${device.laptop} {
        div {
          grid-gap: 4rem;
        }
      }
    `}</style>
  </div>
)

export default Grid
