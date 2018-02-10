import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Plx from "react-plx"
import Image from "./Image"
import c from "../config"

const Wrapper = styled.figure`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  transition: 400ms ease;

  img {
    vertical-align: middle;
    width: 100%;
  }
`

const Caption = styled.figcaption`
  width: 100%;
  font-size: ${c.f1};
  font-weight: 300;
  letter-spacing: ${c.ls1};
  line-height: 1.25;
  color: ${c.gray};
  padding-left: ${c.space1};
  padding-right: ${c.space1};
  margin-top: 0.25rem;

  @media (min-width: ${c.bpNs}) {
    font-size: ${c.f2};
    padding-left: ${c.space2};
    padding-right: ${c.space2};
  }

  @media (min-width: ${c.bpL}) {
    font-size: ${c.f3};
    padding-left: ${c.space3};
    padding-right: ${c.space3};
  }

  @media (min-width: ${c.bpXl}) {
    font-size: ${c.f4};
  }
`

const parallaxData = [
  {
    start: "self",
    duration: 400,
    // easing: "easeOutCubic",
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      },
      {
        startValue: 0.9,
        endValue: 1,
        property: "scale"
      }
    ]
  }
]

class Figure extends Component {
  render() {
    return (
      <Plx parallaxData={parallaxData} style={{ width: "100%" }}>
        <Wrapper>
          <Image
            sizes={this.props.sizes}
            sizesString={this.props.sizesString}
          />
          <Caption>{this.props.caption}</Caption>
        </Wrapper>
      </Plx>
    )
  }
}

Figure.propTypes = {
  sizes: PropTypes.object,
  sizesString: PropTypes.string
}

export default Figure
