import React, { Component } from "react"
import styled from "styled-components"
import config from "../config"
import { device } from "../media"
import { mapRange, getYOffset } from "../helpers"

const Wrapper = styled.div`
  min-height: ${props => (props.full ? "100vh" : "50vh")};
  text-align: center;
  padding: ${config.space1};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: ${config.space2};
  }

  @media ${device.laptop} {
    padding: ${config.space3};
  }
`

class Intro extends Component {
  constructor(props) {
    super(props)
    this.fadeText = this.fadeText.bind(this)
  }

  fadeText() {
    const el = this.parallaxContainer
    const scrollTop = getYOffset()
    const windowHeight = window.innerHeight
    let yPos = el.offsetTop - scrollTop
    // let yOffset = mapRange(yPos, windowHeight * 0.4, windowHeight, 0, 10)
    let opac = mapRange(yPos, windowHeight * 0.005, el.offsetTop, 0.2, 1)
    // el.style.transform = `translateY(${yOffset}px)`
    el.style.opacity = opac
  }

  componentDidMount() {
    this.fadeText()
    window.addEventListener("scroll", this.fadeText)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.fadeText)
  }

  render() {
    return (
      <Wrapper full={this.props.full}>
        <div ref={comp => (this.parallaxContainer = comp)}>
          {this.props.children}
        </div>
      </Wrapper>
    )
  }
}

export default Intro
