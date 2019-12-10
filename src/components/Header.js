import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../theme'

export const containerStyles = css`
  font-family: var(--ff-mono);
  width: 100%;
  pointer-events: none;
  padding-left: var(--space-16);
  padding-right: var(--space-16);

  @media ${device.tablet} {
    padding-left: var(--space-24);
    padding-right: var(--space-24);
  }

  * {
    pointer-events: auto;
  }

  a {
    font-family: var(--ff-mono);
    text-decoration: none;
    color: inherit;
    transition: opacity 400ms;
    background-color: transparent;
    border: 0;
  }

  a:hover,
  a:focus {
    opacity: 0.5;
    background-color: transparent;
  }
`

const Container = styled.header`
  ${containerStyles};
  padding-top: var(--space-8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

export const Text = styled.span`
  font-size: var(--fs-14);

  @media ${device.tablet} {
    font-size: var(--fs-16);
  }

  @media ${device.laptop} {
    font-size: var(--fs-18);
  }
`

function Header({ author, tagline }) {
  return (
    <Container className="menubar">
      {author && (
        <Text>
          <Link to="/">{author}</Link>, {tagline}
        </Text>
      )}
    </Container>
  )
}

export default Header
