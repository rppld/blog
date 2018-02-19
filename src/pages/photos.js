import React, { Component } from "react"
import Intro from "../components/Intro"
import Figure from "../components/Figure"
import { Paragraph } from "../components/Paragraph"
import { PhotoGrid } from "../components/PhotoGrid"
import { PhotoGridItem } from "../components/PhotoGridItem"
import { scaleItems } from "../helpers"
import { debounce } from "lodash"

class PhotosPage extends Component {
  getSize = index => {
    switch (index) {
      case 1:
      case 5:
        return "medium"
      case 2:
      case 4:
        return "small"
      case 3:
      case 6:
      default:
        return "large"
    }
  }

  getSizesString = index => {
    switch (index) {
      case 1:
      case 5:
        return "(min-width: 30em) 60vw, 100vw"
      case 2:
      case 4:
        return "(min-width: 30em) 40vw, 100vw"
      case 3:
      case 6:
      default:
        return "(min-width: 60em) 80vw, 100vw"
    }
  }

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

        <PhotoGrid innerRef={comp => (this.grid = comp)}>
          {data.allPhotosJson.edges.map(({ node }, i) => {
            count < 6 ? count++ : (count = 1)

            return (
              <PhotoGridItem
                key={node.internal.contentDigest}
                size={this.getSize(count)}
              >
                <Figure
                  caption={node.caption}
                  sizes={node.image.childImageSharp.sizes}
                  sizesString={this.getSizesString(count)}
                />
              </PhotoGridItem>
            )
          })}
        </PhotoGrid>
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
