import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: ${config.f5};
  font-weight: 700;
  color: ${config.nearBlack};
  line-height: 1.25;
  transform: translateX(-1px);

  @media ${device.tablet} {
    font-size: ${config.f6};
    transform: translateX(-2px);
  }

  @media ${device.laptop} {
    margin-bottom: 1rem;
    transform: translateX(-3px);
    font-size: ${config.f7};
  }

  @media ${device.laptopL} {
    transform: translateX(-3px);
    font-size: ${config.f8};
  }
`
