import * as React from 'react'
import { NextPage } from 'next'
import { Photospage } from '../types'
import {
  getResource,
  getImageTransform,
  getAspectRatioFromImageUrl,
  getImageSrcSet,
} from '../utils/storyblok'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Image from '../components/Image'
import createMarkup from '../utils/create-markup'
import Grid, { GridItem } from '../components/Grid'
import getGridItemSize from '../utils/get-grid-item-size'

interface Props {
  page: Photospage
}

const PhotosPage: NextPage<Props> = props => {
  let count = 0

  return (
    <Layout>
      <Intro>
        <div dangerouslySetInnerHTML={createMarkup(props.page.content.intro)} />
      </Intro>

      <Grid>
        {props.page.content.images.map(({ name, filename: src }) => {
          count < 6 ? count++ : (count = 1)

          return (
            <GridItem key={src} size={getGridItemSize(count)}>
              <Image
                src={getImageTransform(src, '100x0/filters:quality(50)')}
                aspectRatio={getAspectRatioFromImageUrl(src)}
                alt={name}
                caption={name}
                sizes="(max-width: 768px) 80vw, 100vw"
                srcSet={getImageSrcSet(src)}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Layout>
  )
}

export async function unstable_getStaticProps() {
  const { story } = await getResource({ slug: 'photos' })

  return {
    props: {
      page: story,
    },
  }
}

export default PhotosPage
