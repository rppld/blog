import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { Photospage, Photo } from '../types'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import PhotoStream from '../components/PhotoStream'
import createMarkup from '../utils/create-markup'

interface Props {
  page: Photospage
  photos: [Photo]
}

const PhotosPage: NextPage<Props> = (props) => {
  return (
    <Layout title="Philipp Rappold—Photos">
      <Banner>
        <h1
          dangerouslySetInnerHTML={createMarkup(props.page.content.intro, {
            renderInline: true,
          })}
        />
      </Banner>

      <PhotoStream items={props.photos} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { story } = await getResource({ slug: 'photos-index' })

  const { stories } = await getResource({
    filterQuery: {
      attribute: 'component',
      operation: 'in',
      query: 'photo',
    },
    perPage: 100,
  })

  return {
    props: {
      page: story,
      photos: stories,
    },
  }
}

export default PhotosPage
