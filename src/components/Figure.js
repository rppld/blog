import React, { Component } from "react"
import "intersection-observer" // polyfill
import Observer from "@researchgate/react-intersection-observer"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import c from "../config"

const Wrapper = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  max-width: 1080px;
  transform: ${props =>
    props.show === false ? "translateY(200px)" : "translateY(0)"};
  opacity: ${props => (props.show === false ? "0" : "1")};
  transition: 400ms ease;

  img {
    vertical-align: middle;
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

  @media (min-width: 30em) {
    font-size: ${c.f2};
    padding-left: ${c.space2};
    padding-right: ${c.space2};
  }

  @media (min-width: 60em) {
    font-size: ${c.f3};
    padding-left: ${c.space3};
    padding-right: ${c.space3};
  }
`

class Figure extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: [0, 1].includes(this.props.index) ? true : false
    }
  }

  handleChange = event => {
    this.setState(prevState => ({
      show: event.isIntersecting ? true : false
    }))
  }

  render() {
    return (
      <Observer onChange={this.handleChange} rootMargin="25% 0% 0%">
        <Wrapper show={this.state.show}>
          <Image sizes={this.props.sizes} />
          <Caption>{this.props.caption}</Caption>
        </Wrapper>
      </Observer>
    )
  }
}

Figure.propTypes = {
  sizes: PropTypes.object
}

export default Figure
