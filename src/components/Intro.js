import React, { Component } from "react"
import styled from "styled-components"
import config from "../config"
import { device } from "../media"
import { remap, getYOffset } from "../helpers"

const Wrapper = styled.div`
  min-height: ${props => (props.full ? "100vh" : "50vh")};
  text-align: center;
  padding: ${config.space1};
  display: flex;
  justify-content: center;
  transition: opacity 400ms;
  align-items: center;
  opacity: ${props => (props.show ? "1" : "0")};

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
    this.state = { show: false }
    this.unhide = this.unhide.bind(this)
    this.fadeText = this.fadeText.bind(this)
  }

  fadeText() {
    const el = this.parallaxContainer
    const scrollTop = getYOffset()
    const windowHeight = window.innerHeight
    let yPos = el.offsetTop - scrollTop
    // let yOffset = remap(yPos, windowHeight * 0.4, windowHeight, 0, 10)
    let opac = remap(yPos, windowHeight * 0.005, el.offsetTop, 0.2, 1)
    // el.style.transform = `translateY(${yOffset}px)`
    el.style.opacity = opac
  }

  unhide() {
    this.setState((prevState, props) => ({
      show: true
    }))
  }

  componentDidMount() {
    requestAnimationFrame(this.unhide)

    if (this.props.fade) {
      this.fadeText()
      window.addEventListener("scroll", this.fadeText)
    }
  }

  componentWillUnmount() {
    if (this.props.fade) {
      window.removeEventListener("scroll", this.fadeText)
    }
  }

  render() {
    return (
      <Wrapper full={this.props.full} show={this.state.show}>
        <div ref={comp => (this.parallaxContainer = comp)}>
          {this.props.children}
        </div>
      </Wrapper>
    )
  }
}

export default Intro
