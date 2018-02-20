import React, { Component } from "react"
import Intro from "../components/Intro"
import Figure from "../components/Figure"
import { Paragraph } from "../components/Paragraph"
import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem"
import { Link, RouterLink } from "../components/Link"
import { getSize, getSizesString, scaleItems } from "../helpers"
import { debounce } from "lodash"

class IndexPage extends Component {
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
            Hi, I'm Philipp, an information designer in Amsterdam, working at
            the intersection of design and technology and taking{" "}
            <RouterLink to="/photos">photos</RouterLink> for fun. You can follow
            me on <Link href="https://twitter.com/rppld">Twitter</Link> and{" "}
            <Link href="https://www.instagram.com/philipprappold/">
              Instagram
            </Link>.
          </Paragraph>
        </Intro>

        <Grid innerRef={comp => (this.grid = comp)}>
          {data.allWorkJson.edges.map(({ node }, i) => {
            count < 6 ? count++ : (count = 1)

            return (
              <GridItem key={node.internal.contentDigest} size={getSize(count)}>
                <Figure
                  caption={node.caption}
                  bgColor={node.bgColor}
                  padTop={node.padTop}
                  padRight={node.padRight}
                  padBottom={node.padBottom}
                  padLeft={node.padLeft}
                  link={node.link}
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

export default IndexPage

export const query = graphql`
  query WorkQuery {
    allWorkJson {
      edges {
        node {
          caption
          link
          padTop
          padRight
          padBottom
          padLeft
          bgColor
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
