import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Intro from '../components/Intro'
import Figure from '../components/Figure'
import { Heading } from '../components/Heading'
import { Grid, GridItem } from '../components/Grid'
import { getSize, createMarkup } from '../utils'

function PhotosPage({ data }) {
  const { author } = data.site.siteMetadata
  const { intro, tagline, contentBlocks } = data.contentfulPhotos
  let count = 0

  return (
    <>
      <Helmet title={`${author}, ${tagline}`} />

      <Intro>
        <Heading
          dangerouslySetInnerHTML={createMarkup(intro.childMarkdownRemark.html)}
        />
      </Intro>

      <Grid>
        {contentBlocks.reverse().map((block, i) => {
          count < 6 ? count++ : (count = 1)
          const { id, title, image } = block

          return (
            <GridItem key={id} size={getSize(count)}>
              {image && <Figure fluid={image.fluid} caption={title} />}
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}

export default PhotosPage

export const query = graphql`
  query PhotosPageQuery {
    site {
      siteMetadata {
        author
      }
    }
    contentfulPhotos {
      tagline
      intro {
        childMarkdownRemark {
          html
        }
      }
      contentBlocks {
        __typename
        ... on ContentfulBlockImage {
          id
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
