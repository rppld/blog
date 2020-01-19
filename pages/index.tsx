import * as React from 'react'
import { NextPage } from 'next'
import { Homepage } from '../types'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import createMarkup from '../utils/create-markup'

// https://github.com/wesbos/Syntax/pull/451
// https://github.com/zeit/next.js/issues/9524

interface Props {
  story: Homepage
}

const IndexPage: NextPage<Props> = props => {
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
  const { story } = await getResource({ slug: 'home' })

  return {
    props: {
      story,
    },
  }
}

export default IndexPage
