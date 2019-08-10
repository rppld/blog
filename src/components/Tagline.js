import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { space, fontSize, device } from '../theme'

const Container = styled.span`
  display: block;
  position: absolute;
  z-index: 1000;
  top: ${space.s0};
  right: ${space.s0};
  padding: ${space.s0};
  text-align: right;

  @media ${device.tablet} {
    padding-left: ${space.s1};
    padding-right: ${space.s1};
  }
`

const Paragraph = styled.p`
  display: block;
  margin: 0;
  font-size: ${fontSize.f0};

  @media ${device.tablet} {
    font-size: ${fontSize.f1};
  }
`

function Tagline({ text }) {
  return (
    <Container className="menubar">
      <Paragraph>
        <Link to="/about">{text}</Link>
      </Paragraph>
    </Container>
  )
}

export default Tagline
