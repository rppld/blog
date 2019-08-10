import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Header } from '../components/Menubar'
import Figure from '../components/Figure'
import Intro from '../components/Intro'
import Outro from '../components/Outro'
import { Heading } from '../components/Heading'
import { Grid } from '../components/Grid'
import { GridItem } from '../components/GridItem'
import {
  getSize,
  scaleItems,
  createMarkup,
  getPaddingProps,
  stripParagraphTags,
} from '../utils'
import { debounce } from 'lodash'

class IndexPage extends Component {
  componentDidMount() {
    const els = this.grid.childNodes
    scaleItems(els)
    window.addEventListener('scroll', () => scaleItems(els))
    window.addEventListener('resize', debounce(() => scaleItems(els), 200))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', scaleItems)
    window.removeEventListener('resize', scaleItems)
  }

  render() {
    const { data } = this.props
    const { intro, outro, tagline, projects } = data.contentfulHomepage
    let count = 0

    return (
      <>
        <Helmet title={`${data.site.siteMetadata.author}, ${tagline}`} />
        <Header title={tagline} />
        <Intro>
          <Heading
            dangerouslySetInnerHTML={createMarkup(
              stripParagraphTags(intro.childMarkdownRemark.html)
            )}
          />
        </Intro>

        <Grid ref={comp => (this.grid = comp)}>
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
