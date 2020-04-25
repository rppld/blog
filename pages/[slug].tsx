import * as React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import PostBody from '../components/PostBody'
import { Post } from '../types'

interface Props {
  story: Post
}

const BlogPostPage: NextPage<Props> = (props) => {
  const { name, content } = props.story

  return (
    <Layout title={`Philipp Rappold—${name}`}>
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
      ...stories.map((story) => {
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
