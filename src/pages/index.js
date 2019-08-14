import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Figure from '../components/Figure'
import Intro from '../components/Intro'
import { Heading } from '../components/Heading'
import { Grid, GridItem } from '../components/Grid'
import { getSize, createMarkup, getPaddingProps } from '../utils'

function IndexPage(props) {
  const { data } = props
  const { intro, tagline, projects } = data.contentfulHomepage
  let count = 0

  return (
    <>
      <Helmet title={`${data.site.siteMetadata.author}, ${tagline}`} />

      <Intro>
        <Heading
          dangerouslySetInnerHTML={createMarkup(intro.childMarkdownRemark.html)}
        />
      </Intro>

      <Grid>
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
              <Link to={`/${slug}/`}>
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
