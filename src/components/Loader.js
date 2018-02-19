import React, { Component } from "react"
import { Transition } from "react-transition-group"
import styled from "styled-components"

const duration = 200

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #bbeffd;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 96px;
  font-weight: 700;
`

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 }
}

class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojis: ["👋", "🙌", "🤙", "🤘", "🙃", "🎉", "👌"],
      randomEmoji: null
    }
  }

  componentWillReceiveProps() {
    if (!this.props.show) {
      this.setState((prevState, props) => ({
        randomEmoji: this.state.emojis[
          Math.floor(Math.random() * this.state.emojis.length)
        ]
      }))
    }
  }

  render() {
    return (
      <Transition
        in={this.props.show}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <Wrapper>
              <span role="img" aria-label="Emoji">
                {this.state.randomEmoji}
              </span>
            </Wrapper>
          </div>
        )}
      </Transition>
    )
  }
}

export default Loader
