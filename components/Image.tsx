import * as React from 'react'
import Img from 'gatsby-image'

interface Props {
  alt: string
  src: string
  srcWebp?: string
  srcSet?: string
  srcSetWebp?: string
  sizes?: string
  aspectRatio?: number
  className?: string
}

const Image: React.FunctionComponent<Props> = ({
  alt,
  src,
  srcWebp,
  srcSet,
  srcSetWebp,
  sizes,
  aspectRatio,
  className,
}) => (
  <Img
    fluid={{
      src,
      srcWebp,
      srcSet,
      srcSetWebp,
      sizes,
      aspectRatio,
      base64: src,
    }}
    alt={alt}
    className={className}
    backgroundColor="var(--color-body)"
  />
)

export default Image
