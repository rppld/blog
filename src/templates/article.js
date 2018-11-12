import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Header } from '../components/Menubar'
import { Body } from '../components/Body'
import { Divider } from '../components/Divider'
import Intro from '../components/Intro'
import Outro from '../components/Outro'
import { Heading } from '../components/Heading'
import { createMarkup, stripParagraphTags } from '../utils'

class ArticleTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props
    const { author } = data.site.siteMetadata
    const page = data.contentfulArticle
    const {
      tagline,
      coverImage,
      coverImageBackgroundColor,
      contentBlocks,
      outro,
    } = page

    return (
      <>
        <Helmet title={`${author}, ${tagline}`} />
        <Header author={author} title={tagline} />
        <Intro bgColor={coverImageBackgroundColor}>
          {coverImage.fluid.sizes ? (
            <Img
              fluid={coverImage.fluid}
              style={{
                verticalAlign: 'middle',
                width: '65vmin',
                height: '65vmin',
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

        <Body blocks={contentBlocks} />

        <Divider />

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
      outro {
        childMarkdownRemark {
          html
        }
      }
      coverImageBackgroundColor
      contentBlocks {
        __typename
        ... on ContentfulBlockHeadingAlpha {
          id
          heading
        }
        ... on ContentfulBlockHeadingBeta {
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
