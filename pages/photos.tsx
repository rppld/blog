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
import Banner from '../components/Banner'
import Figure from '../components/Figure'
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
      <Banner>
        <h1
          dangerouslySetInnerHTML={createMarkup(props.page.content.intro, {
            renderInline: true,
          })}
        />
      </Banner>

      <Grid>
        {props.page.content.images.map(({ alt, caption, file }) => {
          count < 6 ? count++ : (count = 1)

          return (
            <GridItem key={file} size={getGridItemSize(count)}>
              <Figure caption={alt}>
                <Image
                  alt={alt || caption}
                  src={getImageTransform(file, '100x0/filters:quality(50)')}
                  srcWebp={getImageTransform(
                    file,
                    '100x0/filters:quality(50):format(webp)'
                  )}
                  srcSet={getImageSrcSet(file)}
                  srcSetWebp={getImageSrcSet(file, 'filters:format(webp)')}
                  sizes="(max-width: 768px) 80vw, 100vw"
                  aspectRatio={getAspectRatioFromImageUrl(file)}
                />
              </Figure>
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
