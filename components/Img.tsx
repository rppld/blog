import * as React from 'react'
import styles from './Img.module.css'

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

const Img: React.FunctionComponent<Props> = ({
  src,
  alt,
  srcWebp,
  srcSetWebp,
  aspectRatio,
  ...props
}) => (
  <div className={styles.wrapper}>
    <span
      className={styles.aspectRatio}
      style={{ paddingTop: `${100 / aspectRatio}%` }}
    />
    <img src={src} alt={alt} className={styles.image} {...props} />
  </div>
)

export default Img
