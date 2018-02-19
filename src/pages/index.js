import React, { Component } from "react"
import Intro from "../components/Intro"
import Figure from "../components/Figure"
import { Paragraph } from "../components/Paragraph"
import { ProjectGrid } from "../components/ProjectGrid"
import { ProjectGridItem } from "../components/ProjectGridItem"
import { Link, RouterLink } from "../components/Link"
import { scaleItems } from "../helpers"
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

        <ProjectGrid innerRef={comp => (this.grid = comp)}>
          {data.allWorkJson.edges.map(({ node }, i) => {
            return (
              <ProjectGridItem
                key={node.internal.contentDigest}
                size={node.size}
                bgColor={node.bgColor}
                padTop={node.padTop}
                padLeft={node.padLeft}
                padRight={node.padRight}
              >
                {node.image.extension === "svg" ? (
                  <img
                    src={node.image.publicURL}
                    alt={node.caption}
                    style={{ verticalAlign: "middle", maxWidth: "100%" }}
                  />
                ) : (
                  <Figure
                    sizes={node.image.childImageSharp.sizes}
                    sizesString="(min-width: 60em) 80vw, 100vw"
                  />
                )}
              </ProjectGridItem>
            )
          })}
        </ProjectGrid>
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
          size
          padTop
          padLeft
          padRight
          bgColor
          internal {
            contentDigest
          }
          image {
            extension
            publicURL
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
