import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Paragraph = styled.p`
  margin: 0;
  font-size: ${config.f2};
  // letter-spacing: ${config.ls1};
  font-weight: 700;
  color: ${config.nearBlack};

  @media ${device.mobileL} {
    font-size: ${config.f3};
  }

  @media ${device.tablet} {
    font-size: ${config.f4};
  }

  @media ${device.laptop} {
    font-size: ${config.f6};
  }

  @media ${device.laptopL} {
    font-size: ${config.f9};
  }
`
