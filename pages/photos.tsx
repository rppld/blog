import * as React from 'react'
import { NextPage } from 'next'
import { Story } from '../types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import createMarkup from '../utils/createMarkup'

interface Props {
  story: Story
}

const PhotosPage: NextPage<Props> = props => {
  console.log(props.story)

  return (
    <Layout>
      <Intro>
        <div
          dangerouslySetInnerHTML={createMarkup(props.story.content.intro)}
        />
      </Intro>
    </Layout>
  )
}

export async function unstable_getStaticProps() {
  const token = process.env.STORYBLOK_API_KEY
  const { story } = await fetch(
    `https://api.storyblok.com/v1/cdn/stories/photospage?version=published&token=${token}&cv=1579126444`
  ).then(res => res.json())

  return {
    props: {
      story,
    },
  }
}

export default PhotosPage
