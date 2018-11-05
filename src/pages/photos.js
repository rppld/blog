import React, { Component } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { Header } from "../components/Menubar"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import Figure from "../components/Figure"
import { Heading, FauxHeading } from "../components/Heading"
import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem"
import { getSize, scaleItems, createMarkup } from "../utils"
import { debounce } from "lodash"

class PhotosPage extends Component {
  componentDidMount() {
    const els = this.grid.childNodes
    scaleItems(els)
    window.addEventListener("scroll", () => scaleItems(els))
    window.addEventListener("resize", debounce(() => scaleItems(els), 200))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", scaleItems)
    window.removeEventListener("resize", scaleItems)
  }

  render() {
    const { data } = this.props
    const { author } = data.site.siteMetadata
    const { intro, outro, tagline, contentBlocks } = data.contentfulPhotos
    let count = 0

    return (
      <div>
        <Helmet title={`${author}, ${tagline}`} />

        <Header author={author} title={tagline} />

        <Intro>
          <Heading
            dangerouslySetInnerHTML={createMarkup(
              intro.childMarkdownRemark.html
            )}
          />
        </Intro>

        <Grid ref={comp => (this.grid = comp)}>
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
              outro.childMarkdownRemark.html
            )}
          />
        </Outro>
      </div>
    )
  }
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
