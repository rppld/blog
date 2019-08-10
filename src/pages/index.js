import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Tagline from '../components/Tagline'
import Figure from '../components/Figure'
import Intro from '../components/Intro'
import Outro from '../components/Outro'
import { Heading } from '../components/Heading'
import { Grid } from '../components/Grid'
import { GridItem } from '../components/GridItem'
import {
  getSize,
  createMarkup,
  getPaddingProps,
  stripParagraphTags,
} from '../utils'
import useItemScaling from '../hooks/use-item-scaling'

function IndexPage(props) {
  const { data } = props
  const { intro, outro, tagline, projects } = data.contentfulHomepage
  let count = 0
  const gridContainer = React.useRef()
  useItemScaling(gridContainer)

  return (
    <>
      <Helmet title={`${data.site.siteMetadata.author}, ${tagline}`} />
      <Tagline text={tagline} />

      <Intro>
        <Heading
          dangerouslySetInnerHTML={createMarkup(
            stripParagraphTags(intro.childMarkdownRemark.html)
          )}
        />
      </Intro>

      <Grid ref={gridContainer}>
        {projects.map(project => {
          count < 6 ? count++ : (count = 1)
          const {
            id,
            slug,
            title,
            featuredImage,
            featuredImagePadding: padding,
            featuredImageBackgroundColor: bgColor,
          } = project

          return (
            <GridItem key={id} size={getSize(count)}>
              <Link style={{ width: '100%' }} to={`/${slug}/`}>
                {featuredImage.fluid.sizes ? (
                  <Figure
                    {...getPaddingProps(padding)}
                    bgColor={bgColor}
                    fluid={featuredImage.fluid}
                    caption={title}
                  />
                ) : (
                  <Figure
                    {...getPaddingProps(padding)}
                    bgColor={bgColor}
                    src={featuredImage.file.url}
                    caption={title}
                  />
                )}
              </Link>
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
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        author
      }
    }
    contentfulHomepage {
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
      projects {
        __typename
        ... on ContentfulArticle {
          id
          title
          slug
          featuredImagePadding
          featuredImageBackgroundColor
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
`
