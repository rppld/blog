import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

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

const Image = styled.span`
  display: block;
`

const duration = 200

const defaultStyles = {
  transitionProperty: 'opacity, transform',
  transitionDuration: `${duration}ms`,
  transitionTimingFunction: `cubic-bezier(.215, .61, .355, 1)`,
  opacity: 0,
}

const wrapperTransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
}

const imageTransitionStyles = {
  entering: { opacity: 0, transform: 'scale(0.75)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0 },
}

class Loader extends Component {
  state = {
    emojis: ['👋', '🙌', '🤙', '🤘', '🙃', '🎉', '👌', '🗣', '🤔'],
    randomEmoji: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.show === false && prevProps.show !== this.props.show) {
      this.setState((prevState, props) => ({
        randomEmoji: this.state.emojis[
          Math.floor(Math.random() * this.state.emojis.length)
        ],
      }))
    }
  }

  render() {
    return (
      <Transition
        in={this.props.show}
        timeout={duration}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <Wrapper
            style={{
              ...defaultStyles,
              ...wrapperTransitionStyles[state],
            }}
          >
            <Image
              style={{
                ...defaultStyles,
                ...imageTransitionStyles[state],
              }}
              role="img"
              aria-label="Emoji"
            >
              {this.state.randomEmoji}
            </Image>
          </Wrapper>
        )}
      </Transition>
    )
  }
}

export default Loader
