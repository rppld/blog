import React, { Component } from "react"
import Intro from "../components/Intro"
import Figure from "../components/Figure"
import { Paragraph } from "../components/Paragraph"
import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem"
import { getSize, getSizesString, scaleItems } from "../helpers"
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
    let count = 0

    return (
      <div>
        <Intro>
          <Paragraph>
            I've collected quite a few pictures over time, so I made this
            archive of personal favourites to showcase the ones I'm most happy
            with.
          </Paragraph>
        </Intro>

        <Grid innerRef={comp => (this.grid = comp)}>
          {data.allPhotosJson.edges.map(({ node }, i) => {
            count < 6 ? count++ : (count = 1)

            return (
              <GridItem key={node.internal.contentDigest} size={getSize(count)}>
                <Figure
                  caption={node.caption}
                  sizes={node.image.childImageSharp.sizes}
                  sizesString={getSizesString(count)}
                />
              </GridItem>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default PhotosPage

export const query = graphql`
  query PhotosQuery {
    allPhotosJson {
      edges {
        node {
          caption
          internal {
            contentDigest
          }
          image {
            childImageSharp {
              sizes(quality: 90) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
`
