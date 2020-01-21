import * as React from 'react'
import Img from 'gatsby-image'

interface Props {
  src: string
  alt: string
  sizes?: string
  srcSet?: string
  aspectRatio?: number
}

const Image: React.FunctionComponent<Props> = ({
  src,
  sizes,
  srcSet,
  aspectRatio,
  alt,
}) => (
  <Img
    fluid={{
      src: src,
      sizes: sizes,
      srcSet: srcSet,
      aspectRatio: aspectRatio,
      base64: src,
    }}
    alt={alt}
    backgroundColor="var(--color-body)"
  />
)

export default Image
