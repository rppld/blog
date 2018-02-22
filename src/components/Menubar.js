import React from "react"
import styled, { css } from "styled-components"
import Link from "gatsby-link"
import config from "../config"
import { device } from "../media"

const wrapperStyles = css`
  position: fixed;
  z-index: 999;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${config.space1};
  padding-right: ${config.space1};
  pointer-events: none;

  @media ${device.tablet} {
    padding-left: ${config.space2};
    padding-right: ${config.space2};
  }

  @media ${device.laptopL} {
    padding-left: ${config.space3};
    padding-right: ${config.space3};
  }

  * {
    pointer-events: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const HeaderWrapper = styled.header`
  top: 0;
  padding-top: ${config.space0};
  ${wrapperStyles};
`

const FooterWrapper = styled.footer`
  bottom: 0;
  padding-bottom: ${config.space0};
  ${wrapperStyles};
`

const Paragraph = styled.p`
  margin: 0;
  font-size: ${config.f0};

  @media ${device.tablet} {
    font-size: ${config.f1};
  }

  @media ${device.laptop} {
    font-size: ${config.f2};
  }
`

export const Header = props => (
  <HeaderWrapper>
    <Paragraph>
      <Link to="/">{props.author}</Link>
    </Paragraph>

    <Paragraph>{props.title}</Paragraph>
  </HeaderWrapper>
)

export const Footer = props => (
  <FooterWrapper>
    <Paragraph>&copy; 2018</Paragraph>

    <Paragraph>
      <a href={`mailto:${props.email}`}>{props.email}</a>
    </Paragraph>
  </FooterWrapper>
)
