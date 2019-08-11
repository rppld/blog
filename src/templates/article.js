import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import ArticleBody from '../components/ArticleBody'
import Intro from '../components/Intro'

function ArticleTemplate(props) {
  const { data } = props
  const { author } = data.site.siteMetadata
  const page = data.contentfulArticle
  const {
    title,
    tagline,
    coverImage,
    coverImageBackgroundColor,
    contentBlocks,
  } = page

  return (
    <>
      <Helmet title={`${author}, ${tagline}`} />

      <Intro bgColor={coverImageBackgroundColor}>
        {coverImage.fluid.sizes ? (
          <Img
            fluid={coverImage.fluid}
            style={{
              verticalAlign: 'middle',
              width: '50vmin',
              height: '50vmin',
              borderRadius: '100%',
            }}
          />
        ) : (
          <img
            src={coverImage.file.url}
            alt={coverImage.file.fileName}
            style={{ verticalAlign: 'middle', width: '100%' }}
          />
        )}
      </Intro>

      <ArticleBody title={title} blocks={contentBlocks} />
    </>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    site {
      siteMetadata {
        author
      }
    }
    contentfulArticle(id: { eq: $id }) {
      title
      tagline
      coverImage {
        fluid(quality: 90) {
          ...GatsbyContentfulFluid
        }
        file {
          url
          fileName
        }
      }
      coverImageBackgroundColor
      contentBlocks {
        __typename
        ... on ContentfulBlockHeading {
          id
          heading
        }
        ... on ContentfulBlockText {
          id
          text {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulBlockImage {
          id
          title
          caption
          backgroundColor
          padding
          image {
            fluid(quality: 90) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
