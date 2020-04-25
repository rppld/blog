import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { Homepage, Post } from '../types'
import { getResource } from '../utils/storyblok'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import ProjectThumb from '../components/ProjectThumb'
import createMarkup from '../utils/create-markup'
import Grid, { GridItem } from '../components/Grid'
import getGridItemSize from '../utils/get-grid-item-size'

interface Props {
  page: Homepage
  projects: [Post]
}

const IndexPage: NextPage<Props> = (props) => {
  let count = 0

  return (
    <Layout>
      <Banner>
        <h1
          dangerouslySetInnerHTML={createMarkup(props.page.content.intro, {
            renderInline: true,
          })}
          data-cy="tagline"
        />
      </Banner>

      <Grid>
        {props.projects.map(({ id, slug, name, content }) => {
          count < 6 ? count++ : (count = 1)

          return (
            <GridItem key={id} size={getGridItemSize(count)} data-cy="project">
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { story } = await getResource({
    slug: 'home',
  })

  const { stories } = await getResource({
    filterQuery: {
      attribute: 'component',
      operation: 'in',
      query: 'project',
    },
  })

  return {
    props: {
      page: story,
      projects: stories,
    },
  }
}

export default IndexPage
