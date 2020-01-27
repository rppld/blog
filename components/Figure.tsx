import * as React from 'react'
import Text from './Text'
import device from '../theme/device'
import createMarkup from '../utils/create-markup'

interface Props {
  caption?: string
  padding?: string[]
  bgColor?: string
}

const Figure: React.FunctionComponent<Props> = ({
  children,
  caption,
  padding,
  bgColor,
  ...props
}) => (
  <figure {...props}>
    <div>{children}</div>

    {caption && (
      <figcaption>
        <Text
          dangerouslySetInnerHTML={createMarkup(caption, {
            renderInline: true,
          })}
        />
      </figcaption>
    )}

    <style jsx>{`
      figure {
        position: relative;
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }

      figcaption {
        color: var(--color-text-meta);
        margin-top: 0.5rem;
      }
    `}</style>

    <style jsx>{`
      div {
        background-color: ${bgColor};
        padding-top: ${padding.includes('top') ? '1rem' : '0'};
        padding-right: ${padding.includes('right') ? '1rem' : '0'};
        padding-bottom: ${padding.includes('bottom') ? '1rem' : '0'};
        padding-left: ${padding.includes('left') ? '1rem' : '0'};
      }

      @media ${device.tablet} {
        div {
          padding-top: ${padding.includes('top') ? '2rem' : '0'};
          padding-right: ${padding.includes('right') ? '2rem' : '0'};
          padding-bottom: ${padding.includes('bottom') ? '2rem' : '0'};
          padding-left: ${padding.includes('left') ? '2rem' : '0'};
        }
      }

      @media ${device.laptop} {
        div {
          padding-top: ${padding.includes('top') ? '4rem' : '0'};
          padding-right: ${padding.includes('right') ? '4rem' : '0'};
          padding-bottom: ${padding.includes('bottom') ? '4rem' : '0'};
          padding-left: ${padding.includes('left') ? '4rem' : '0'};
        }
      }
    `}</style>
  </figure>
)

Figure.defaultProps = {
  padding: [],
}

export default Figure
