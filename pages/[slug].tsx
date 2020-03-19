import * as React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Banner from '../components/Banner'
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
    <Layout
      title={`Philipp Rappold—${name}`}
      headerProps={{ withBorder: !backgroundColor }}
    >
      <Banner bgColor={backgroundColor}>
        <img src={featuredImage} alt={name} />
      </Banner>
      <PostBody name={name} lede={content.lede} blocks={content.body} />

      <style jsx>{`
        img {
          max-width: 300px;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { stories } = await getResource({ startsWith: 'posts' })

  return {
    paths: [
      ...stories.map(story => {
        return {
          params: {
            slug: story.slug,
          },
        }
      }),
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { story } = await getResource({
    slug: `posts/${params.slug}`,
  })

  return {
    props: {
      story,
    },
  }
}

export default BlogPostPage
