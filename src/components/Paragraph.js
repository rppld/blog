import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: ${config.space0};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: ${config.ls1};
  font-weight: 400;
  color: ${config.nearBlack};
  font-size: ${config.f1};

  @media ${device.mobileL} {
    font-size: ${config.f2};
  }

  @media ${device.tablet} {
    font-size: ${config.f3};
    margin-bottom: ${config.space1};
  }

  @media ${device.laptop} {
    font-size: ${config.f4};
    margin-bottom: ${config.space2};
  }
`
