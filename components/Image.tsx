import * as React from 'react'
import NextImage, { ImageProps } from 'next/image'

const Image: React.FunctionComponent<ImageProps> = (props) => (
  <NextImage {...props} />
)

export default Image
