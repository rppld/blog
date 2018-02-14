import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "./Image"
import config from "../config"
import { device } from "../media"

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
  font-size: ${config.f1};
  font-weight: 400;
  letter-spacing: ${config.ls1};
  line-height: 1.25;
  color: ${config.gray};
  padding-left: ${config.space1};
  padding-right: ${config.space1};
  margin-top: 0.25rem;

  @media ${device.tablet} {
    font-size: ${config.f2};
    padding-left: ${config.space2};
    padding-right: ${config.space2};
  }

  @media ${device.laptop} {
    font-size: ${config.f3};
    padding-left: ${config.space3};
    padding-right: ${config.space3};
  }

  @media ${device.laptopL} {
    font-size: ${config.f4};
  }
`

class Figure extends Component {
  render() {
    return (
      <Wrapper>
        <Image sizes={this.props.sizes} sizesString={this.props.sizesString} />
        <Caption>{this.props.caption}</Caption>
      </Wrapper>
    )
  }
}

Figure.propTypes = {
  index: PropTypes.number,
  sizes: PropTypes.object,
  sizesString: PropTypes.string
}

export default Figure
