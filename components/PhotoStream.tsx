import * as React from 'react'
import { Photo } from '../types'
import {
  getImageTransform,
  getAspectRatioFromImageUrl,
  getImageSrcSet,
} from '../utils/storyblok'
import Img from '../components/Img'
import styles from './PhotoStream.module.css'

interface Props {
  items: [Photo]
}

const PhotoStream: React.FunctionComponent<Props> = ({ items }) => (
  <div className={styles.container}>
    <div className={styles.grid}>
      {items.map(({ id, slug, name, content }) => {
        const { alt, caption, file } = content

        return (
          <div className={styles.item} key={id}>
            <img
              alt={alt}
              src={getImageTransform(file, '100x0/filters:quality(50)')}
              // srcWebp={getImageTransform(
              //   file,
              //   '100x0/filters:quality(50):format(webp)'
              // )}
              srcSet={getImageSrcSet(file)}
              // srcSetWebp={getImageSrcSet(file, 'filters:format(webp)')}
              sizes="(max-width: 768px) 80vw, 100vw"
              // aspectRatio={getAspectRatioFromImageUrl(file)}
            />
          </div>
        )
      })}
    </div>
  </div>
)

export default PhotoStream
