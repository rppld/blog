import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { space, fontSize, device } from '../theme'

export const containerStyles = css`
  position: absolute;
  z-index: 999;
  left: ${space.s0};
  right: ${space.s0};
  display: flex;
  border-radius: 0.5rem;
  flex-direction: row;
  pointer-events: none;
  padding: ${space.s0};

  @media ${device.tablet} {
    padding-left: ${space.s1};
    padding-right: ${space.s1};
  }

  * {
    pointer-events: auto;
  }
`

const Container = styled.header`
  ${containerStyles};
  top: ${space.s0};
`

const Paragraph = styled.p`
  margin: 0;
  font-size: ${fontSize.f0};

  @media ${device.tablet} {
    font-size: ${fontSize.f1};
  }
`

function Header({ author }) {
  return (
    <Container className="menubar">
      {author && (
        <Paragraph>
          <Link to="/">{author}</Link>
        </Paragraph>
      )}
    </Container>
  )
}

export default Header
