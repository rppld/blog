import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { space, fontSize } from '../constants'
import { device } from '../media'

const wrapperStyles = css`
  position: fixed;
  z-index: 999;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${space.s1};
  padding-right: ${space.s1};
  pointer-events: none;

  @media ${device.tablet} {
    padding-left: ${space.s2};
    padding-right: ${space.s2};
  }

  @media ${device.laptopL} {
    padding-left: ${space.s3};
    padding-right: ${space.s3};
  }

  * {
    pointer-events: auto;
  }
`

const HeaderWrapper = styled.header`
  top: 0;
  padding-top: ${space.s0};
  ${wrapperStyles};
`

const FooterWrapper = styled.footer`
  bottom: 0;
  padding-bottom: ${space.s0};
  ${wrapperStyles};
`

const Paragraph = styled.p`
  margin: 0;
  font-size: ${fontSize.f0};

  @media ${device.tablet} {
    font-size: ${fontSize.f1};
  }

  @media ${device.laptop} {
    font-size: ${fontSize.f2};
  }
`

export const Header = props => (
  <HeaderWrapper className="menubar">
    <Paragraph>
      <Link to="/">{props.author}</Link>
    </Paragraph>

    <Paragraph>
      <Link to="/about">{props.title}</Link>
    </Paragraph>
  </HeaderWrapper>
)

export const Footer = props => (
  <FooterWrapper className="menubar">
    <Paragraph style={{ opacity: 0.5 }}>&copy; 2019</Paragraph>

    <Paragraph>
      <a href={`mailto:${props.email}`}>Say Hi</a>
    </Paragraph>
  </FooterWrapper>
)
