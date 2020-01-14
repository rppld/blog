import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

// https://github.com/wesbos/Syntax/pull/451
// https://github.com/zeit/next.js/issues/9524

interface Props {
  story: []
}

const BlogPostPage: NextPage<Props> = props => {
  console.log(props.story)

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
  const token = process.env.STORYBLOK_API_KEY
  const { story } = await fetch(
    `https://api.storyblok.com/v1/cdn/stories/blog/${params.slug}?version=published&token=${token}`
  ).then(res => res.json())

  return {
    props: {
      story,
    },
  }
}

export default BlogPostPage
