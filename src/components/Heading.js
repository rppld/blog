import styled, { css } from "styled-components"
import config from "../config"
import { device } from "../media"

const headingStyles = css`
  margin-top: ${props => (props.secondary ? config.space2 : "0")};
  font-family: "IBM Plex Serif", serif;
  margin-bottom: ${props => (props.inBody ? config.space0 : "0")};
  font-weight: 700;
  text-align: center;
  max-width: ${props => (props.inBody ? "800px" : "none")};
  margin-left: ${props => (props.inBody ? "auto" : "0")};
  margin-right: ${props => (props.inBody ? "auto" : "0")};
  color: ${config.nearBlack};
  line-height: 1.5;
  font-size: ${config.f2};
  font-size: ${props => (props.secondary ? config.f1 : config.f2)};

  @media ${device.mobileL} {
    font-size: ${config.f3};
    font-size: ${props => (props.secondary ? config.f2 : config.f3)};
  }

  @media ${device.tablet} {
    font-size: ${config.f4};
    font-size: ${props => (props.secondary ? config.f3 : config.f4)};
    margin-top: ${props => (props.secondary ? config.space3 : "0")};
    margin-bottom: ${props => (props.inBody ? config.space1 : "0")};
  }

  @media ${device.laptop} {
    font-size: ${config.f6};
    font-size: ${props => (props.secondary ? config.f5 : config.f6)};
    margin-bottom: ${props => (props.inBody ? config.space2 : "0")};
  }

  @media ${device.laptopL} {
    font-size: ${config.f9};
    font-size: ${props => (props.secondary ? config.f8 : config.f9)};
  }
`

export const Heading = styled.h1`
  ${headingStyles};
`

export const FauxHeading = styled.p`
  ${headingStyles};
`
