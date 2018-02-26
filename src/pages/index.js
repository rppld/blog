import React, { Component } from "react"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import Figure from "../components/Figure"
import { Header } from "../components/Menubar"
import { Heading, FauxHeading } from "../components/Heading"
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
        <Header
          author={data.site.siteMetadata.author}
          title={data.site.siteMetadata.title}
        />
        <Intro>
          <Heading>
            Hi{" "}
            <span role="img" aria-label="Emoji">
              👋
            </span>{" "}
            I&rsquo;m Philipp, an information designer in Amsterdam taking{" "}
            <RouterLink to="/photos">photos</RouterLink> for fun. Scroll down
            <span role="img" aria-label="Emoji">
              👇
            </span>{" "}
            to see some of my work. You can follow me on{" "}
            <Link href="https://twitter.com/rppld">Twitter</Link> and{" "}
            <Link href="https://www.instagram.com/philipprappold/">
              Instagram
            </Link>.
          </Heading>
        </Intro>

        <Grid innerRef={comp => (this.grid = comp)}>
          {data.allProjectsJson.edges.map(({ node }, i) => {
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
                  publicURL={node.image.publicURL}
                  sizes={
                    node.image.childImageSharp
                      ? node.image.childImageSharp.sizes
                      : null
                  }
                  sizesString={getSizesString(count)}
                />
              </GridItem>
            )
          })}
        </Grid>

        <Outro>
          <FauxHeading>
            This is it? Eh… <em>Shrug emoji</em>{" "}
            <span role="img" aria-label="Emoji">
              🤷‍
            </span>{" "}
            I&rsquo;ll add more projects with time. Did you know I also like to
            take photos though? So much, it even has its own{" "}
            <RouterLink to="/photos">page</RouterLink> on this website!
          </FauxHeading>
        </Outro>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        author
        title
      }
    }
    allProjectsJson {
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
