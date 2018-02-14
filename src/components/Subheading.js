import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Subheading = styled.h2`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: ${config.f3};
  font-weight: 700;
  color: ${config.nearBlack};
  line-height: 1.25;
  transform: translateX(-1px);

  @media ${device.tablet} {
    font-size: ${config.f4};
    transform: translateX(-2px);
  }

  @media ${device.laptop} {
    transform: translateX(-3px);
    font-size: ${config.f5};
  }

  @media ${device.laptopL} {
    transform: translateX(-3px);
    font-size: ${config.f6};
  }
`
