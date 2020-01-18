import * as React from 'react'
import Img from 'gatsby-image'
import Text from './Text'

interface Props {
  src: string
  alt: string
  caption?: string
  sizes?: string
  srcSet?: string
  aspectRatio?: number
}

const Image: React.FunctionComponent<Props> = props => (
  <figure>
    <Img
      fluid={{
        src: props.src,
        sizes: props.sizes,
        srcSet: props.srcSet,
        aspectRatio: props.aspectRatio,
      }}
      alt={props.alt}
      backgroundColor="var(--color-body)"
    />

    {props.caption && (
      <figcaption>
        <Text>{props.caption}</Text>
      </figcaption>
    )}

    <style jsx>{`
      figure {
        position: relative;
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        transition: 400ms ease;
      }

      img {
        vertical-align: middle;
        width: 100%;
      }

      figcaption {
        color: var(--color-text-meta);
        margin-top: 0.5rem;
      }
    `}</style>
  </figure>
)

export default Image
