import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Tagline from '../components/Tagline'
import Intro from '../components/Intro'
import Outro from '../components/Outro'
import Figure from '../components/Figure'
import { Heading } from '../components/Heading'
import { Grid } from '../components/Grid'
import { GridItem } from '../components/GridItem'
import { getSize, createMarkup, stripParagraphTags } from '../utils'
import useItemScaling from '../hooks/use-item-scaling'

function PhotosPage(props) {
  const { data } = props
  const { author } = data.site.siteMetadata
  const { intro, outro, tagline, contentBlocks } = data.contentfulPhotos
  let count = 0
  const gridContainer = React.useRef()
  useItemScaling(gridContainer)

  return (
    <div>
      <Helmet title={`${author}, ${tagline}`} />
      <Tagline text={tagline} />

      <Intro>
        <Heading
          dangerouslySetInnerHTML={createMarkup(
            stripParagraphTags(intro.childMarkdownRemark.html)
          )}
        />
      </Intro>

      <Grid ref={gridContainer}>
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

      <Outro>
        <Heading
          as="p"
          dangerouslySetInnerHTML={createMarkup(
            stripParagraphTags(outro.childMarkdownRemark.html)
          )}
        />
      </Outro>
    </div>
  )
}

export default PhotosPage

export const query = graphql`
  query PhotosQuery {
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
      outro {
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
