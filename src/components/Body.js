import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Body = styled.div`
  padding-top: ${config.space1};
  padding-bottom: ${config.space1};

  @media ${device.tablet} {
    padding-top: ${config.space2};
    padding-bottom: ${config.space2};
  }

  @media ${device.laptop} {
    padding-top: ${config.space3};
    padding-bottom: ${config.space3};
  }
`
