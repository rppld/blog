import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import { Post } from '../types'

interface Props {
  story: Post
}

const BlogPostPage: NextPage<Props> = props => {
  return (
    <Layout>
      <h1>Hello Next.js</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}

export async function unstable_getStaticProps({ params }) {
  const { story } = await getResource({ slug: params.slug })

  return {
    props: {
      story,
    },
  }
}

export default BlogPostPage
