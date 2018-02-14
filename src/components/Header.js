import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import { device } from "../media"
import config from "../config"

const Wrapper = styled.header`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${config.space0};
  padding-left: ${config.space1};
  padding-right: ${config.space1};

  @media ${device.tablet} {
    padding-left: ${config.space2};
    padding-right: ${config.space2};
  }

  @media ${device.laptop} {
    padding-left: ${config.space3};
    padding-right: ${config.space3};
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: ${config.f0};
  font-weight: 700;
  color: ${config.nearBlack};
`

const Paragraph = styled.p`
  font-size: ${config.f0};
  margin: 0;
`

const EmailLink = styled.a`
  color: ${config.nearBlack};
`

const Header = props => (
  <Wrapper>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Title>{props.siteName}</Title>
    </Link>

    <Paragraph>
      Let's chat:{" "}
      <EmailLink href={`mailto:${props.email}`}>{props.email}</EmailLink>
    </Paragraph>
  </Wrapper>
)

export default Header
