import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

// https://github.com/wesbos/Syntax/pull/451
// https://github.com/zeit/next.js/issues/9524

interface Props {
  stories: []
}

const IndexPage: NextPage<Props> = props => {
  console.log(props.stories)

  return (
    <Layout>
      <h1>Hello Next.js</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}

export async function unstable_getStaticProps() {
  const token = process.env.STORYBLOK_API_KEY
  const { stories } = await fetch(
    `https://api.storyblok.com/v1/cdn/stories?version=published&token=${token}`
  ).then(res => res.json())

  return {
    props: {
      stories,
    },
  }
}

export default IndexPage
