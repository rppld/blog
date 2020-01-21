import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Homepage, Post } from '../types'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import ProjectThumb from '../components/ProjectThumb'
import createMarkup from '../utils/create-markup'
import Grid, { GridItem } from '../components/Grid'
import getGridItemSize from '../utils/get-grid-item-size'

// https://github.com/wesbos/Syntax/pull/451
// https://github.com/zeit/next.js/issues/9524

interface Props {
  story: Homepage
  stories: [Post]
}

const IndexPage: NextPage<Props> = props => {
  let count = 0

  return (
    <Layout>
      <Intro>
        <div
          dangerouslySetInnerHTML={createMarkup(props.story.content.intro)}
        />
      </Intro>

      <Grid>
        {props.stories.map(({ id, slug, name, content }) => {
          count < 6 ? count++ : (count = 1)

          return (
            <GridItem key={id} size={getGridItemSize(count)}>
              <Link href="/[slug]" as={`/${slug}`}>
                <a className="default">
                  <ProjectThumb name={name} content={content} />
                </a>
              </Link>
            </GridItem>
          )
        })}
      </Grid>

      <style jsx>{`
        a {
          display: block;
          width: 100%;
        }
      `}</style>
    </Layout>
  )
}

export async function unstable_getStaticProps() {
  const { story } = await getResource({ slug: 'home' })
  const { stories } = await getResource({ startsWith: 'posts' })

  return {
    props: {
      story,
      stories,
    },
  }
}

export default IndexPage
