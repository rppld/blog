import styled, { css } from "styled-components"
import config from "../config"
import { device } from "../media"

export const paragraphStyles = css`
  letter-spacing: ${config.ls1};
  font-weight: 400;
  font-size: ${config.f1};

  @media ${device.mobileL} {
    font-size: ${config.f2};
  }

  @media ${device.tablet} {
    font-size: ${config.f3};
  }

  @media ${device.laptopL} {
    font-size: ${config.f4};
  }
`

export const Paragraph = styled.p`
  ${paragraphStyles};
  margin-top: 0;
  margin-bottom: ${config.space0};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: ${config.nearBlack};

  @media ${device.tablet} {
    margin-bottom: ${config.space1};
  }

  @media ${device.laptop} {
    margin-bottom: ${config.space2};
  }
`
