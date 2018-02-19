import styled, { css } from "styled-components"
import GatsbyLink from "gatsby-link"
import config from "../config"

const linkStyles = css`
  transition-property: background-color, border-color, opacity;
  transition-duration: 400ms;
  text-decoration: none;
  font-weight: 700;
  background-color: rgba(187, 239, 253, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: ${config.nearBlack};

  &:hover,
  &:focus {
    background-color: #bbeffd;
    border-bottom-color: #1a1a1a;
  }
`

export const Link = styled.a`
  ${linkStyles};
`

export const RouterLink = styled(GatsbyLink)`
  ${linkStyles};
`
