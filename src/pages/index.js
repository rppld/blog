import React, { Component } from "react"
import styled from "styled-components"
import Figure from "../components/Figure"

const Grid = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 30em) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  }

  @media (min-width: 60em) {
    grid-gap: 4rem;
  }
`

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 30em) {
    grid-column: ${props =>
      props.size === "small"
        ? "span 2"
        : props.size === "medium" ? "span 3" : "span 5"};
  }
`

class IndexPage extends Component {
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
        // return "(min-width: 1080px) 100vw, 1080px"
        return "(min-width: 60em) 80vw, 100vw"
    }
  }

  handleChange = event => {
    this.setState(prevState => ({
      showHeader: event.isIntersecting ? false : true
    }))
  }

  render() {
    const { data } = this.props
    let count = 0

    return (
      <Grid>
        {data.allPhotosJson.edges.map(({ node }) => {
          count < 6 ? count++ : (count = 1)

          return (
            <GridItem
              key={node.internal.contentDigest}
              size={this.getSize(count)}
            >
              <Figure
                caption={node.caption}
                sizes={node.image.childImageSharp.sizes}
                sizesString={this.getSizesString(count)}
              />
            </GridItem>
          )
        })}
      </Grid>
    )
  }
}

export default IndexPage

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
