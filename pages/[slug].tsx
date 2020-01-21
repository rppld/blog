import * as React from 'react'
import { NextPage } from 'next'
import Intro from '../components/Intro'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import PostBody from '../components/PostBody'
import { Post } from '../types'

interface Props {
  story: Post
}

const BlogPostPage: NextPage<Props> = props => {
  const { name, content } = props.story
  const {
    featured_image: featuredImage,
    background_color: backgroundColor,
  } = content

  return (
    <Layout>
      <Intro bgColor={backgroundColor}>
        <img src={featuredImage} alt={name} />
      </Intro>
      <PostBody blocks={content.body} />
    </Layout>
  )
}

export async function unstable_getStaticProps({ params }) {
  const { story } = await getResource({ slug: `posts/${params.slug}` })

  return {
    props: {
      story,
    },
  }
}

export default BlogPostPage
