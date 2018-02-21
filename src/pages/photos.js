import React, { Component } from "react"
import Helmet from "react-helmet"
import { Header } from "../components/Menubar"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import Figure from "../components/Figure"
import { Link } from "../components/Link"
import { Heading, FauxHeading } from "../components/Heading"
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
        <Helmet
          title={`${data.site.siteMetadata.author}, ${
            data.photosPageJson.title
          }`}
        />

        <Header
          author={data.site.siteMetadata.author}
          title={data.photosPageJson.title}
        />

        <Intro>
          <Heading>
            I&rsquo;ve collected quite a few pictures over time, so I made this
            archive of personal favourites to showcase the ones I&rsquo;m most
            happy with.
          </Heading>
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

        <Outro>
          <FauxHeading>
            Love that you made it all the way down{" "}
            <span role="img" aria-label="Emoji">
              😌
            </span>{" "}
            What I also love is Instagram!{" "}
            <Link href="https://www.instagram.com/philipprappold/">
              Follow me
            </Link>{" "}
            if you like stories of delicious looking food{" "}
            <Link href="https://www.instagram.com/explore/tags/influencer/">
              #influencer
            </Link>
          </FauxHeading>
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
    photosPageJson {
      title
    }
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
