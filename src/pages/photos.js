import React, { Component } from "react"
import Intro from "../components/Intro"
import Figure from "../components/Figure"
import { Paragraph } from "../components/Paragraph"
import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem"
import { remap, getYOffset } from "../helpers"
import { debounce } from "lodash"

class PhotosPage extends Component {
  constructor(props) {
    super(props)
    this.scaleItems = this.scaleItems.bind(this)
  }

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

  scaleItems() {
    if (!this.grid) return false
    const els = this.grid.childNodes
    let i = null
    const scrollTop = getYOffset()
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth

    // Desktop behavior
    if (windowWidth > 992) {
      for (i = 0; i < els.length; i++) {
        // find card position
        let yPos = els[i].offsetTop - scrollTop
        // determine scale value
        let scaleValue = 1
        if (yPos > windowHeight * 0.6) {
          scaleValue = remap(yPos, windowHeight * 0.6, windowHeight, 1, 0.9)
        } else {
          scaleValue = remap(yPos, 0, windowHeight * 0.6, 1, 1)
        }
        // shift Y position on scroll
        let yOffset = remap(yPos, windowHeight * 0.2, windowHeight, 0, 200)
        // apply transformations & reset opacity (mobile override)
        els[i].style.transform = `scale(${scaleValue}) translateY(${yOffset}px)`
        els[i].style.opacity = 1
      }
    } else {
      // Mobile/default behavior
      for (i = 0; i < els.length; i++) {
        let yPos = els[i].offsetTop - scrollTop
        let yOffset = remap(yPos, windowHeight * 0.4, windowHeight, 0, 75)
        let opac = remap(yPos, windowHeight * 0.7, windowHeight, 1, 0)
        els[i].style.transform = `translateY(${yOffset}px)`
        els[i].style.opacity = opac
      }
    }
  }

  componentDidMount() {
    this.scaleItems()
    window.addEventListener("scroll", this.scaleItems)
    window.addEventListener("resize", debounce(this.scaleItems, 200))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scaleItems)
    window.removeEventListener("resize", this.scaleItems)
  }

  render() {
    const { data } = this.props
    let count = 0

    return (
      <div>
        <Intro full fade>
          <Paragraph>
            I've collected quite a few pictures over time, so I made this
            archive of personal favourites to showcase the ones I'm most proud
            of.
          </Paragraph>
        </Intro>

        <Grid innerRef={comp => (this.grid = comp)}>
          {data.allPhotosJson.edges.map(({ node }, i) => {
            count < 6 ? count++ : (count = 1)

            return (
              <GridItem
                key={node.internal.contentDigest}
                size={this.getSize(count)}
              >
                <Figure
                  caption={node.caption}
                  index={i}
                  sizes={node.image.childImageSharp.sizes}
                  sizesString={this.getSizesString(count)}
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
