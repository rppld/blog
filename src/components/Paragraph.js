import styled, { css } from "styled-components"
import config from "../config"
import { device } from "../media"

export const paragraphStyles = css`
  hyphens: auto;
  letter-spacing: ${config.ls1};
  text-align: ${props => (props.textCenter ? "center" : "left")};
  font-weight: 400;
  font-size: ${config.f1};
  padding-left: ${config.space1};
  padding-right: ${config.space1};

  @media ${device.mobileL} {
    font-size: ${config.f2};
  }

  @media ${device.tablet} {
    font-size: ${config.f3};
    padding-left: ${config.space2};
    padding-right: ${config.space2};
  }

  @media ${device.laptop} {
    padding-left: ${config.space3};
    padding-right: ${config.space3};
  }

  @media ${device.laptopL} {
    font-size: ${config.f4};
  }

  em {
    white-space: nowrap;
  }

  img {
    vertical-align: middle;
  }
`

export const Paragraph = styled.p`
  ${paragraphStyles};
  margin-top: 0;
  margin-bottom: ${config.space2};
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: ${config.nearBlack};
`
