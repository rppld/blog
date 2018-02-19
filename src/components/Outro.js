import React, { Component } from "react"
import styled from "styled-components"
import config from "../config"
import { Paragraph } from "../components/Paragraph"
import { device } from "../media"
import { remap, getYOffset } from "../helpers"

const Wrapper = styled.div`
  min-height: 100vh;
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

class Outro extends Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
    this.fadeText = this.fadeText.bind(this)
  }

  fadeText() {
    const el = this.parallaxContainer
    const scrollTop = getYOffset()
    const windowHeight = window.innerHeight
    let yPos = el.offsetTop - scrollTop
    // let yOffset = remap(yPos, windowHeight * 0.4, windowHeight, 0, 10)
    let opac = remap(yPos, windowHeight * 0.005, windowHeight, 1.5, 0.2)
    // el.style.transform = `translateY(${yOffset}px)`
    el.style.opacity = opac
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      show: true
    }))

    this.fadeText()
    window.addEventListener("scroll", this.fadeText)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.fadeText)
  }

  render() {
    return (
      <Wrapper show={this.state.show}>
        <div ref={comp => (this.parallaxContainer = comp)}>
          <Paragraph>
            Work<br />Photos
          </Paragraph>
        </div>
      </Wrapper>
    )
  }
}

export default Outro
