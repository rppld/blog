import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { device } from '../theme'

export const containerStyles = css`
  position: absolute;
  z-index: 999;
  left: var(--space-8);
  right: var(--space-8);
  display: flex;
  border-radius: 0.5rem;
  flex-direction: row;
  pointer-events: none;
  padding-top: var(--space-8);

  @media ${device.tablet} {
    padding-left: var(--space-16);
    padding-right: var(--space-16);
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
  top: var(--space-8);
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

function Header({ author }) {
  return (
    <Container className="menubar">
      {author && (
        <Text>
          <Link to="/">{author}</Link>
        </Text>
      )}
    </Container>
  )
}

export default Header
