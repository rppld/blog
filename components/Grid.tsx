import * as React from 'react'
import device from '../theme/device'

interface Props {
  size?: string
}

export const GridItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <div className="item" {...props}>
    {children}

    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
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
