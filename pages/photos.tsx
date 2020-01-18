import * as React from 'react'
import { NextPage } from 'next'
import { Page, Photo } from '../types'
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
  page: Page
  photos: [Photo]
}

const PhotosPage: NextPage<Props> = props => {
  let count = 0

  return (
    <Layout>
      <Intro>
        <div dangerouslySetInnerHTML={createMarkup(props.page.content.intro)} />
      </Intro>

      <Grid>
        {props.photos.map(photo => {
          count < 6 ? count++ : (count = 1)
          const {
            id,
            name,
            content: { image },
          } = photo

          return (
            <GridItem key={id} size={getGridItemSize(count)}>
              <Image
                src={getImageTransform(image, '100x0')}
                aspectRatio={getAspectRatioFromImageUrl(image)}
                alt={name}
                caption={name}
                sizes="(max-width: 768px) 80vw, 100vw"
                srcSet={getImageSrcSet(image)}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Layout>
  )
}

export async function unstable_getStaticProps() {
  const { story } = await getResource({ slug: 'photospage' })
  const { stories } = await getResource({
    startsWith: 'photos/',
    perPage: 99,
  })

  return {
    props: {
      page: story,
      photos: stories,
    },
  }
}

export default PhotosPage
